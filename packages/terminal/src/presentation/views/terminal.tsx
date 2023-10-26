import React, { useEffect, useState , useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { AdjustmentsHorizontalIcon, TrashIcon } from "@heroicons/react/20/solid";
import { createDespachoService } from "@application/services/despachoCreateService";
import { casoUsoRecetaElectronica } from "@application/useCases";
import { graphql } from "@msp/shared";
import { IDespacho, IDespachoDetalle, IProducto, IStockProductoBodegaItem, ModalProps } from "@domain/models";
import { IRecetaDetalle, IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { addMedicamento, deleteMedicamento, updateDespacho, updateMedicamento } from "@presentation/actions";
import { RootState } from "@presentation/stores";
import { InfoDialog, TurnoCloseButton } from "./components";
import { SearchBar, ModalDistribucionLote, GridProductos, RadioGroupTipoReceta } from "./components/forms";
import { BotonImprimir } from "./imprimir/botonImprimir";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function Terminal() {
    const dispatch = useDispatch();
    const datosDespacho = useSelector((state: RootState) => state.despacho);
    const terminal: any = useSelector<RootState>((state) => state.terminal);
    const [defaultValues] = useState<IDespacho>(datosDespacho);
    const navigate = useNavigate();
    const [mensajeGridProductos, setMensajeGridProductos] = useState<string>("");
    const [infoDialogProps, setInfoDialogProps] = useState<ModalProps | any>({ isOpen: false });
   

    const {
        control,
        formState: { errors },
        handleSubmit,
        register,
        reset,
        watch,
    } = useForm<IDespacho>({ defaultValues });

    const { useDespachoCreateMutation, useProductoStockBodegaLazyQuery, useRecetaLazyQuery } = graphql;
    const [getProductoStockBodegaLazyQuery] = useProductoStockBodegaLazyQuery();
    const [getRecetaLazyQuery] = useRecetaLazyQuery();
    const [setDespachoCreate] = useDespachoCreateMutation();
    const [esRecetaElectronica, setEsRecetaElectronica] = useState<boolean>(false);
    const [modalDistLoteIsOpen, setModalDistLoteIsOpen] = useState<boolean>(false);
    const [productosRadioGroup, setProductosRadioGroup] = useState<IProducto[]>([]);
    const [recetaProductos, setRecetaProductos] = useState<IProducto[]>([]);
    const [productoModal, setProductoModal] = useState<IProducto | any>(null);
    const [productoGridSelected, setProductoGridSelected] = useState<IProducto | null>(null);



    const botonImprimirRef = React.useRef<any>(null);

    const editarDistribucionLotes = (producto: IProducto) => {
        console.log("editarDistribucionLotes invoked for", producto);
        setProductoModal(producto);
        openCloseModalDistLote();
    };

    const addLotesDespachoDetalle = (lotes: IStockProductoBodegaItem[]) => {
        lotes.forEach((lote: IStockProductoBodegaItem) => {
            dispatch(
                addMedicamento({
                    cantidaddespachada: lote.CANTIDADDISTRIBUIDA ?? 0,
                    cantidaddispensada: 0, // en receta manual es cero, sino en debe colocar valor que retorna receta electronica
                    cantidadrequerida: productoModal.cantidadrequerida,
                    lote_id: parseInt(lote.LOTEID),
                    producto_id: lote.PRODUCTOID,
                })
            );
        });
    };

    const finalizarDistribucionLote = () => {
        console.log("finalizarDistribucionLote");
        const index = recetaProductos.findIndex((item: IProducto) => item.id === productoModal.id);
        if (index >= 0) {
            console.log("finalizarDistribucionLote: producto ya esta en recetaProductos");
            const producto = { ...recetaProductos[index] };
            if (JSON.stringify(producto) !== JSON.stringify(productoModal)) {
                console.log("finalizarDistribucionLote: actualizar recetaProductos");
                // Actualizar receta, usada en form visual
                const tmpReceta = [...recetaProductos];
                tmpReceta[index] = productoModal;
                setRecetaProductos(tmpReceta);
                // Actualizar state en redux
                if (datosDespacho.despachodetalle.length) {
                    // Actualizar lotes a despachodetalle en storage de redux
                    console.log("Actualizar lotes a despachodetalle en storage de redux");
                    const tmpDespachoDetalle = [...datosDespacho.despachodetalle].map((lote: IDespachoDetalle, index) => {
                        if (lote.producto_id === productoModal.id) {
                            return { ...lote, cantidaddespachada: productoModal.lotes[index].CANTIDADDISTRIBUIDA };
                        }
                        return { ...lote };
                    });
                    console.log("finalizarDistribucionLote: actualizar despachoDetalle:", tmpDespachoDetalle);
                    dispatch(updateMedicamento(tmpDespachoDetalle));
                } else {
                    console.log("Agregar lotes a despachodetalle en storage de redux");
                    // Agregar lotes a despachodetalle en storage de redux
                    addLotesDespachoDetalle(productoModal.lotes);
                }
            }
        } else {
            // TODO: revisar si este bloque de codigo es necesario, caso contrario suprimir
            console.log("finalizarDistribucionLote: producto no esta en recetaProductos, REVISAR");
            setRecetaProductos([...recetaProductos, productoModal]);
            // Agregar lotes a despachodetalle en storage de redux
            addLotesDespachoDetalle(productoModal.lotes);
        }
        setModalDistLoteIsOpen(false);
        setProductoModal(null);
    };

    /**
     * Manejar cantidad despachada/requerida en fila de producto sin lote
     *
     * @param e
     */
    const handleChangeCantidad = (e: any) => {
        let detalle = [...datosDespacho.despachodetalle];
        let index = detalle.findIndex((item) => item.producto_id == e.target.id.slice(9));
        let item = { ...detalle[index] };
        let cantidad = parseInt(e.target.value);
        if (e.target.id.includes("des")) {
            item.cantidaddespachada = cantidad;
        } else if (e.target.id.includes("req")) {
            item.cantidadrequerida = cantidad;
        }
        detalle[index] = item;
        dispatch(updateMedicamento(detalle));
    };

    const onSubmit: SubmitHandler<IDespacho> = (data) => {
        console.log("SubmitHandler started");
        const mutator: {} = { create: setDespachoCreate };
        // Format the date as "YYYY-MM-DD"
        const formattedDate = new Date().toISOString().slice(0, 10);
        // Descartar lotes no utilizados
        data.despachodetalle = data.despachodetalle.filter((item) => item.cantidaddespachada > 0);

        createDespachoService({ ...data, ...{ fechareceta: formattedDate, turno_id: terminal.turno.id } }, mutator)
            .then((response:any) => {
                // You can access the response here
                console.log("Mutation response:", response);
                if(response?.despachoCreate.status && botonImprimirRef.current){
                    botonImprimirRef.current.handlePrint();
                }
            })
            .catch((error) => {
                // Handle errors here
                console.error("Mutation error:", error);
            });
        console.log("Submit End");
    };

    // Watch in Field Array
    const { fields, remove, append } = useFieldArray({
        name: "despachodetalle",
        control,
    });

    const closeInfoDialog = () => {
        setInfoDialogProps({ isOpen: !infoDialogProps.isOpen, parrafo: "", titulo: "" });
    };

    // console.log("Validation errors", errors);

    useEffect(() => {
        console.log("state.terminal", terminal);
        if (!terminal.id) {
            navigate("/terminal");
        }
    }, [terminal]);

    useEffect(() => {
        if (esRecetaElectronica) {
            setMensajeGridProductos("");
        }
    }, [esRecetaElectronica]);

    useEffect(() => {
        console.log("useEffect reset(datosDespacho)", datosDespacho);
        reset(datosDespacho);
    }, [datosDespacho, reset]);

    // const watchFields = watch(["numeroreceta"]); // you can also target specific fields by their names
    // Callback version of watch.  It's your responsibility to unsubscribe when done.
    useEffect(() => {
        console.log("useEffect", "watch");
        const subscription = watch((value, { name, type }) => {
            if (name !== undefined && type === "change") {
                console.log(value, name, type);
                let pattern = /^despachodetalle/;
                if (pattern.test(name)) {
                    dispatch(updateMedicamento(value.despachodetalle));
                } else {
                    dispatch(updateDespacho(value));
                }
            }
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    useEffect(() => {
        if (productoGridSelected !== null) {
            // Check if an object with the same id does not already exist in the array
            const isNotInArray = !recetaProductos.some((item: IProducto) => item.id === productoGridSelected.id);

            if (isNotInArray) {
                // If it's not in the array, push it
                getProductoStockBodegaLazyQuery({
                    variables: {
                        bodegaId: terminal.bodega.id,
                        productoId: productoGridSelected.id,
                    },
                    fetchPolicy: "cache-and-network",
                    onCompleted: (c: any) => {
                        productoGridSelected.stock = c.productoStockBodega.length ? c.productoStockBodega[0].saldo : 0;

                        if (c.productoStockBodega.length) {
                            if (productoGridSelected.manejaLote) {
                                setProductoModal({
                                    ...productoGridSelected,
                                    ...{
                                        cantidaddespachada: 0,
                                        cantidadrequerida: 0,
                                        lotes: [],
                                    },
                                });

                                openCloseModalDistLote();

                                // Los productos que requieren distribución por lote se agregan al finalizar el modal de distribución
                            } else {
                                console.log("Producto no maneja lote", productoGridSelected);

                                setRecetaProductos([...recetaProductos, productoGridSelected]);
                                dispatch(
                                    addMedicamento({
                                        cantidaddespachada: 0,
                                        cantidaddispensada: 0,
                                        cantidadrequerida: 0,
                                        lote_id: null,
                                        producto_id: productoGridSelected.id,
                                    })
                                );
                            }
                        } else {
                            setInfoDialogProps({
                                parrafo: "El producto seleccionado no tiene stock.",
                                titulo: "Despacho de recetas",
                                isOpen: true,
                            });
                        }
                    },
                    onError: () => {},
                });
            }
        }
    }, [productoGridSelected]);

    function handleClickSearchReceta() {
        if (datosDespacho.numeroreceta.trim()) {
            getRecetaLazyQuery({
                variables: {
                    oid: datosDespacho.numeroreceta.trim(),
                    bodega_id: terminal.bodega.id,
                },
                onCompleted: async (data: any) => {
                    const recetaElectronica: IRecetaElectronica = data?.Receta;
                    const objetoDespacho: IDespacho = await casoUsoRecetaElectronica(recetaElectronica);
                    dispatch(updateDespacho(objetoDespacho)); // Guardar datos en state.despacho
                    // Agregar items de receta electronica al componente de lista de receta
                    const productos = recetaElectronica.recetaDetalle.map((item: IRecetaDetalle): IProducto => {
                        return {
                            cantidaddespachada: 0,
                            cantidadrequerida: item.cantidad_prescrita,
                            codigoproducto: item.producto.codigoproducto,
                            estado: true,
                            id: item.producto.id,
                            lotes: [],
                            manejaLote: !!item.producto.manejalote,
                            nombre: item.producto.nombre,
                            stock: item.producto.productostockbodega?.saldo ?? 0,
                            unidadmedida_id: item.producto.unidadmedidaproducto.id,
                        };
                    });
                    console.log("productos parseados de la receta elect", productos);
                    setRecetaProductos(productos);
                },
            });
        }
    }

    function eliminarProductoReceta(productId: number) {
        dispatch(deleteMedicamento({ producto_id: productId }));
        setRecetaProductos(recetaProductos.filter((item: IProducto) => item.id !== productId));
    }

    function openCloseModalDistLote() {
        setModalDistLoteIsOpen(!modalDistLoteIsOpen);
    }
    const data = {
        numeroReceta: '123456',
        // Otros datos de la receta
      };
    return (
        <div className="isolate bg-white px-6 py-4 sm:py-12 lg:px-8 min-h-screen mb-7">
            <TurnoCloseButton />
            <BotonImprimir recetaProductos={recetaProductos} ref={botonImprimirRef}/>
           

            <div className="mx-auto max-w-2xl text-center">
           
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Despacho de Recetas</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="">
                    <div className="border rounded px-2 py-2">
                        <SearchBar
                            disabled={esRecetaElectronica}
                            placeholder="Digite nombre de producto o SKU para buscar"
                            setProductosRadioGroup={setProductosRadioGroup}
                            setMensajeGridProductos={setMensajeGridProductos}
                        />
                        {productosRadioGroup.length ? (
                            <GridProductos
                                productoGridSelected={productoGridSelected}
                                setProductoGridSelected={setProductoGridSelected}
                                productosRadioGroup={productosRadioGroup}
                                setProductosRadioGroup={setProductosRadioGroup}
                            />
                        ) : (
                            <p>{mensajeGridProductos}</p>
                        )}
                    </div>
                </div>

                {/* Formulario Receta */}
                <div className="">
                    <form className="mx-auto max-w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2">
                            <div className="sm:grid-cols-1 py-8">
                                <RadioGroupTipoReceta
                                    emiteRecetaElectronica={terminal.recetaElectronica}
                                    setTipoReceta={setEsRecetaElectronica}
                                />
                                {/* <label htmlFor="fecha-receta" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Fecha
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        id="fecha-receta"
                                        autoComplete="fecha-receta"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div> */}
                            </div>
                            <div className="sm:grid-cols-1">
                                <label htmlFor="no-receta" className="block text-sm font-semibold leading-6 text-gray-900">
                                    No. Receta
                                </label>
                                <div className="mt-1 relative">
                                    {esRecetaElectronica && (
                                        <>
                                            <button
                                                type="button"
                                                className="absolute top-1 left-2 flex h-6 w-6 items-center justify-center rounded-lg"
                                                onClick={handleClickSearchReceta}
                                            >
                                                <svg
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="-ml-0.5 mr-1.5 h-5 w-5 fill-gray-400 hover:fill-gray-900"
                                                >
                                                    <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                    <input
                                        type="text"
                                        id="no-receta"
                                        autoComplete="no-receta"
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 text-right shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("numeroreceta", { required: true, maxLength: 20 })}
                                    />
                                    {errors.numeroreceta?.type === "required" && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            Número de receta requerido
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dni-paciente" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Identificación Paciente
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="dni-paciente"
                                        autoComplete="dni-paciente"
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("paciente.identificacion", {
                                            required: "Identificación de paciente requerido",
                                        })}
                                    />
                                    {errors.paciente?.identificacion && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.paciente.identificacion.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="nombre-paciente"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Nombre Paciente
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="nombre-paciente"
                                        autoComplete="nombre-paciente"
                                        className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("paciente.nombre", {
                                            required: "Nombre de paciente requerido",
                                            minLength: {
                                                value: 6,
                                                message: "Nombre de paciente debe tener mínimo seis caracteres",
                                            },
                                            pattern: /^[A-Za-z\s'-]+$/i,
                                        })}
                                    />
                                    {errors.paciente?.nombre && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.paciente.nombre.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-full mt-2 px-2 py-2 flex gap-1 justify-between text-sm font-medium leading-6 text-gray-900 bg-gray-400">
                                <div className="flex-1 w-64">Producto</div>
                                <div className="flex-initial w-20">Solicitado</div>
                                <div className="flex-initial w-20">Despachado</div>
                                <div className="flex-initial w-10"></div>
                                <div className="flex-initial w-10"></div>
                            </div>
                            <div className="col-span-full border-b border-gray-900/10 h-64 overflow-y-auto">
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {recetaProductos.map((product, index) => (
                                            <li key={product.id} className="flex py-2 gap-1">
                                                <div className="flex-1 w-64 justify-between text-base font-medium text-gray-900">
                                                    <h3>{product.nombre}</h3>
                                                    <p className="mt-1 text-sm text-gray-500">SKU: {product.codigoproducto}</p>
                                                    <p className="text-gray-500">Stock: {product.stock}</p>
                                                </div>
                                                <div className="flex-initial w-20">
                                                    <input
                                                        type="number"
                                                        id={`cant-req-${product.id}`}
                                                        className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={product.cantidadrequerida}
                                                        readOnly={product.manejaLote}
                                                        onChange={handleChangeCantidad}
                                                    />
                                                </div>

                                                <div className="flex-initial w-20">
                                                    <input
                                                        type="number"
                                                        id={`cant-des-${product.id}`}
                                                        className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        max={product.stock}
                                                        value={product.cantidaddespachada}
                                                        readOnly={product.manejaLote}
                                                        onChange={handleChangeCantidad}
                                                    />
                                                </div>
                                                <div className="flex-initial w-10">
                                                    <button
                                                        type="button"
                                                        className="px-2 py-2 rounded bg-gray-600 font-medium text-center hover:bg-gray-500 disabled:opacity-75"
                                                        disabled={!product.manejaLote}
                                                        onClick={() => editarDistribucionLotes(product)}
                                                    >
                                                        <AdjustmentsHorizontalIcon
                                                            className="text-white h-5"
                                                            aria-hidden="true"
                                                        />
                                                    </button>{" "}
                                                </div>
                                                <div className="flex-initial w-10">
                                                    <button
                                                        type="button"
                                                        className="px-2 py-2 rounded bg-red-600 font-medium text-center hover:bg-red-500"
                                                        onClick={() => eliminarProductoReceta(product.id)}
                                                    >
                                                        <TrashIcon className="text-white h-5" aria-hidden="true" />
                                                    </button>{" "}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dni-receptor" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Identificación Receptor
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="dni-receptor"
                                        autoComplete="dni-receptor"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("identificareceptor")}
                                    />
                                    {/* {errors.identificareceptor && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.identificareceptor.message}
                                        </p>
                                    )} */}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="nombre-receptor"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Nombre Receptor
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="nombre-receptor"
                                        autoComplete="nombre-receptor"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("nombrereceptor", {
                                            // required: "Nombre de receptor requerido",
                                            minLength: {
                                                value: 6,
                                                message: "Nombre de paciente debe tener mínimo seis caracteres",
                                            },
                                            pattern: /^[A-Za-z\s'-]+$/i,
                                        })}
                                    />
                                    {errors.nombrereceptor && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.nombrereceptor.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6 col-span-full">
                                <button
                                    type="button"
                                    className="rounded-md px-3 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-center font-medium leading-5 text-white hover:bg-indigo-500"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            <InfoDialog {...infoDialogProps} onClose={closeInfoDialog} />
            <ModalDistribucionLote
                isOpen={modalDistLoteIsOpen}
                producto={productoModal}
                setProducto={setProductoModal}
                finalizar={finalizarDistribucionLote}
            />
        </div>
    );
}
