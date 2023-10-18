import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/20/solid";
import { IDespacho } from "@domain/models";
import { graphql } from "@msp/shared";
import { addMedicamento, deleteMedicamento, updateDespacho, updateMedicamento } from "@presentation/actions";
import { RootState } from "@presentation/stores";
import { SearchBar, ModalDistribucionLote, GridProductos, RadioGroupTipoReceta } from "./components/forms";
import RecetaElectronica from "./components/recetaElectronica";
import { createDespachoService } from "@application/services/despachoCreateService";
import { IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { casoUsoRecetaElectronica } from "@application/useCases";

const fake_bodega_id = 7589;
const fake_entidad_id = 1781;

interface Producto {
    codigoproducto: string;
    estado: boolean;
    id: number;
    manejaLote: boolean;
    nombre: string;
    stock: number;
    cantidadrequerida: number;
    cantidaddespachada: number;
    unidadmedida_id: number;
}

interface StockProductoBodegaItem {
    CANTIDAD: number;
    CANTIDADDISTRIBUIDA: number;
    CODIGOPRODUCTO: string;
    COSTO: number;
    FECHACADUCIDAD: string;
    FECHAELABORACION: string;
    LOTEID: string;
    NOMBRE: string;
    NUMEROLOTE: string;
    PRODUCTOID: number;
    UNIDADMEDIDAABREVIATURA: string;
    UNIDADMEDIDAID: number;
    UNIDADMEDIDANOMBRE: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export  function Terminal() {
    const dispatch = useDispatch();
    const datosDespacho = useSelector((state: RootState) => state.despacho);
    const [defaultValues, setDefaultValues] = useState<IDespacho>(datosDespacho);

    const {
        control,
        formState: { errors },
        handleSubmit,
        register,
        reset,
        watch,
    } = useForm<IDespacho>({ defaultValues });

    const {
        useDespachoCreateMutation,
        useProductoBodegaCollectionLazyQuery,
        useProductoStockBodegaLazyQuery,
        useRecetaLazyQuery,
        useStockProductoBodegaListLazyQuery,
    } = graphql;

    const [getProductoBodegaCollectionLazyQuery] = useProductoBodegaCollectionLazyQuery();
    const [getProductoStockBodegaLazyQuery] = useProductoStockBodegaLazyQuery();
    const [getRecetaLazyQuery] = useRecetaLazyQuery();
    const [getStockProductoBodegaListLazyQuery] = useStockProductoBodegaListLazyQuery();
    const [setDespachoCreate] = useDespachoCreateMutation();
    const [esRecetaElectronica, setEsRecetaElectronica] = useState<boolean>(false);
    const [modalDistLoteIsOpen, setModalDistLoteIsOpen] = useState<boolean>(false);
    const [stockProductoBodegaList, setStockProductoBodegaList] = useState<StockProductoBodegaItem[]>([]);
    const [productosRadioGroup, setProductosRadioGroup] = useState<Producto[]>([]);
    const [query, setQuery] = useState<string>("");
    const [recetaProductos, setRecetaProductos] = useState<Producto[]>([]);
    const [productoModal, setProductoModal] = useState<Producto | null>(null);
    const [productoGridSelected, setProductoGridSelected] = useState<Producto | null>(null);

    const finalizarDistribucionLote = () => {
        // Agregar producto modal a la lista si es que aun no lo tiene
        if (productoModal && !recetaProductos.some((item: Producto) => item.id === productoModal.id)) {
            console.log("productoModal no está en lista", productoModal);
            setRecetaProductos([...recetaProductos, productoModal]);
        }
        setModalDistLoteIsOpen(false);
        setProductoModal(null);
    };

    const handleChangeCantidadFromModal = () => {
        if (productoModal && productoModal.cantidadrequerida > 0) {
            fetchProductosLote(productoModal.id);
        }
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
        data.despachodetalle = data.despachodetalle.filter((item) => item.cantidaddespachada > 0); // Descartar lotes no utilizados
        createDespachoService(data, mutator);
        console.log("Submit End");
    };

    // Watch in Field Array
    const { fields, remove, append } = useFieldArray({
        name: "despachodetalle",
        control,
    });

    // console.log("Validation errors", errors);

    useEffect(() => {
        if (esRecetaElectronica) {
            console.log("Modo receta electronica activado");
        } else {
            console.log("Modo receta electronica desactivado");
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
            const isNotInArray = !recetaProductos.some((item: Producto) => item.id === productoGridSelected.id);

            if (isNotInArray) {
                // If it's not in the array, push it
                getProductoStockBodegaLazyQuery({
                    variables: {
                        bodegaId: fake_bodega_id,
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
                            alert("El producto seleccionado no tiene stock.");
                        }
                    },
                    onError: () => {},
                });
            }
        }

        if (query.length >= 3) {
            getProductoBodegaCollectionLazyQuery({
                variables: {
                    inputWhere: { bodega_id: { is: fake_bodega_id }, producto: { nombre: { contains: query } } },
                    inputOrder: { asc: "producto.nombre" },
                },
                onCompleted: (c: any) => {
                    setProductosRadioGroup(
                        c.productoBodegaCollection.data.map((item: any) => {
                            return {
                                codigoproducto: item.producto.codigoproducto,
                                estado: !!item.producto.estado,
                                id: item.producto.id,
                                manejaLote: !!item.producto.manejalote,
                                nombre: item.producto.nombre,
                                unidadmedida_id: item.producto.unidadmedida_id,
                            };
                        })
                    );
                },
            });
        }
    }, [query, productoGridSelected]);

    function handleChangeSearchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    function handleClickSearchReceta() {
        if (datosDespacho.numeroreceta.trim()) {
            getRecetaLazyQuery({
                variables: {
                    oid: datosDespacho.numeroreceta.trim(),
                },
                onCompleted: async (data: any) => {
                    const receta: IRecetaElectronica = data?.Receta;
                    const objetoDespacho: IDespacho = await casoUsoRecetaElectronica(receta);
                    dispatch(updateDespacho(objetoDespacho));
                },
            });
        }
    }

    function eliminarProductoReceta(productId: number) {
        dispatch(deleteMedicamento({ producto_id: productId }));
        setRecetaProductos(recetaProductos.filter((item: Producto) => item.id !== productId));
    }

    function fetchProductosLote(productId: number) {
        // const prodInState = datosDespacho.despachodetalle.find((item: IDespachoDetalle) => item.producto_id === productId);
        // const prodInReceta = recetaProductos.find((item: Producto) => item.id === productId);
        // setProductoModal(null);

        // if (prodInReceta && prodInState) {
        //     setProductoModal({
        //         ...prodInReceta,
        //         ...{
        //             cantidaddespachada: prodInState.cantidaddespachada,
        //             cantidadrequerida: prodInState.cantidadrequerida,
        //         },
        //     });
        // }

        // setStockProductoBodegaList([]);
        getStockProductoBodegaListLazyQuery({
            variables: {
                bodega_id: fake_bodega_id,
                cantidad: productoModal?.cantidadrequerida,
                entidad_id: fake_entidad_id,
                producto_id: productId,
                caducado: false,
            },
            fetchPolicy: "cache-and-network",
            onCompleted: (c: any) => {
                console.log("getStockProductoBodegaListLazyQuery completed...");
                setStockProductoBodegaList(c.stockProductoBodegaList);
                c.stockProductoBodegaList.forEach((item: StockProductoBodegaItem) => {
                    dispatch(
                        addMedicamento({
                            cantidaddespachada: item.CANTIDADDISTRIBUIDA ?? 0,
                            cantidaddispensada: 0, // en receta manual es cero, sino en debe colocar valor que retorna receta electronica
                            cantidadrequerida: productoModal?.cantidadrequerida,
                            lote_id: parseInt(item.LOTEID),
                            producto_id: item.PRODUCTOID,
                        })
                    );
                });

                // openCloseModalDistLote();
            },
        });
    }

    function openCloseModalDistLote() {
        setModalDistLoteIsOpen(!modalDistLoteIsOpen);
    }

    return (
        <div className="isolate bg-white px-6 py-4 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Despacho de Recetas</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="">
                    <div className="border rounded px-2 py-2">
                        <SearchBar
                            query={query}
                            onChange={handleChangeSearchBar}
                            placeholder="Digite nombre de producto o SKU para buscar"
                        />
                        <GridProductos
                            productoGridSelected={productoGridSelected}
                            setProductoGridSelected={setProductoGridSelected}
                            productosRadioGroup={productosRadioGroup}
                            setProductosRadioGroup={setProductosRadioGroup}
                        />
                    </div>
                </div>

                {/* Formulario Receta */}
                <div className="">
                    <form className="mx-auto max-w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2">
                            <div className="sm:grid-cols-1 py-8">
                                <RadioGroupTipoReceta setTipoReceta={setEsRecetaElectronica} />
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
                                                        onClick={() => fetchProductosLote(product.id)}
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
            <ModalDistribucionLote
                isOpen={modalDistLoteIsOpen}
                stockProductoBodegaList={stockProductoBodegaList}
                setStockProductoBodegaList={setStockProductoBodegaList}
                onChangeCantidadRequerida={handleChangeCantidadFromModal}
                producto={productoModal}
                setProducto={setProductoModal}
                finalizar={finalizarDistribucionLote}
            />
        </div>
    );
}
