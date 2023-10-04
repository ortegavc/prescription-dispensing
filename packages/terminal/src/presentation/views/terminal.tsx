import React, { useEffect, useState, Fragment, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { RadioGroup } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { MagnifyingGlassIcon, TrashIcon, PencilIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { graphql } from "@msp/shared";
import RecetaElectronica from "./components/recetaElectronica";
import { IDespacho  as IFormInput} from "@domain/models";
import { RootState } from "@presentation/stores";
import { updateDespacho } from "@presentation/actions";

const fake_bodega_id = 7589;
const fake_entidad_id = 1781;

interface FilterableListProps {
    query: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ModalDistribucionLoteProps {
    isOpen: boolean;
    setIsOpen: (e: any) => void;
}


interface Producto {
    codigoproducto: string;
    estado: boolean;
    id: number;
    manejaLote: boolean;
    nombre: string;
    stock: number;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

function SearchBar({ query, onChange }: FilterableListProps) {
    return (
        <div className="relative my-2">
            <span className="pointer-events-auto absolute top-2 left-2 h-6 w-6">
                <MagnifyingGlassIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
            <input
                id="producto-nombre"
                name="producto-nombre"
                type="text"
                autoComplete="producto-nombre"
                className="block w-full rounded-md border-0 px-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Digite nombre de producto o SKU para buscar"
                value={query}
                onChange={onChange}
            />
        </div>
    );
}

function ModalDistribucionLote({ isOpen, setIsOpen }: ModalDistribucionLoteProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Distribución Producto Lote
                                </Dialog.Title>
                                <div className="mt-2 table w-full border">
                                    <div className="table-header-group">
                                        <div className="table-row text-center">
                                            <div className="table-cell border">SKU</div>
                                            <div className="table-cell border">Nombre</div>
                                            <div className="table-cell border">Lote</div>
                                            <div className="table-cell border">Unidad</div>
                                            <div className="table-cell border">Vence</div>
                                            <div className="table-cell border">Stok</div>
                                            <div className="table-cell border">Cant.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={setIsOpen}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default function Terminal() {
    const dispatch = useDispatch();
    const {
        objetoDespacho
      }: any = useSelector<RootState>((state) => state.despacho);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const { useProductoBodegaCollectionLazyQuery, useProductoStockBodegaLazyQuery, useStockProductoBodegaListLazyQuery } =
        graphql;
    const [getProductoBodegaCollectionLazyQuery] = useProductoBodegaCollectionLazyQuery();
    const [getProductoStockBodegaLazyQuery] = useProductoStockBodegaLazyQuery();
    const [getStockProductoBodegaListLazyQuery] = useStockProductoBodegaListLazyQuery();
    const [agreed, setAgreed] = useState<boolean>(false);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [query, setQuery] = useState<string>("");
    const [recetaProductos, setRecetaProductos] = useState<Producto[]>([]);
    const [selected, setSelected] = useState<Producto | null>(null);
    const [modalDistLoteIsOpen, setModalDistLoteIsOpen] = useState<boolean>(false);
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    console.log(errors);

    useEffect(()=>{
        console.log('objetoDespacho',objetoDespacho)
    },[objetoDespacho])

    useEffect(() => {

        if (selected !== null) {
            console.log("Un producto ha sido seleccionado", selected);
            // Check if an object with the same id does not already exist in the array
            const isNotInArray = !recetaProductos.some((item) => item.id === selected.id);

            if (isNotInArray) {
                // If it's not in the array, push it
                getProductoStockBodegaLazyQuery({
                    variables: {
                        bodegaId: fake_bodega_id,
                        productoId: selected.id,
                    },
                    fetchPolicy: "cache-and-network",
                    onCompleted: (c: any) => {
                        console.log("getProductoStockBodegaLazyQuery done", c.productoStockBodega);
                        selected.stock = c.productoStockBodega.length ? c.productoStockBodega[0].saldo : 0;
                        setRecetaProductos([...recetaProductos, selected]);
                    },
                    onError: () => {},
                });
            }
            console.log(recetaProductos);
        }

        if (query.length >= 3) {
            getProductoBodegaCollectionLazyQuery({
                variables: {
                    inputWhere: { bodega_id: { is: fake_bodega_id }, producto: { nombre: { contains: query } } },
                    inputOrder: { asc: "producto.nombre" },
                },
                onCompleted: (c: any) => {
                    setProductos(
                        c.productoBodegaCollection.data.map((item: any) => {
                            return {
                                codigoproducto: item.producto.codigoproducto,
                                estado: !!item.producto.estado,
                                id: item.producto.id,
                                manejaLote: !!item.producto.manejalote,
                                nombre: item.producto.nombre,
                                stock: 0,
                            };
                        })
                    );
                },
            });
        }
    }, [query, selected]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);

        // dispatch(
        //     updateDespacho({
        //        data:{numeroreceta:'prueba'} 
        //     })
        //   );
    }

    function eliminarProductoReceta(productId: number) {
        setRecetaProductos(recetaProductos.filter((item) => item.id !== productId));
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
                <Switch.Group as="div" className="flex gap-x-4 col-span-full">
                    <div className="flex h-6 items-center">
                        <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className={classNames(
                                agreed ? "bg-indigo-600" : "bg-gray-200",
                                "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            )}
                        >
                            <span className="sr-only">Receta Eletrónica</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    agreed ? "translate-x-3.5" : "translate-x-0",
                                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                )}
                            />
                        </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">Despachar Receta Electrónica</Switch.Label>
                </Switch.Group>

                <div className="">
                    <div className="border rounded px-2 py-2">
                        <SearchBar query={query} onChange={handleChange} />
                        <RecetaElectronica/>
                        <RadioGroup value={selected} onChange={setSelected} className="">
                            <RadioGroup.Label className="sr-only">Seleccione un producto</RadioGroup.Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {productos.map((item) => (
                                    <RadioGroup.Option
                                        key={item.id}
                                        value={item}
                                        disabled={!item.estado}
                                        className={({ active }) =>
                                            classNames(
                                                item.estado
                                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                active ? "ring-2 ring-indigo-500" : "",
                                                "rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                            )
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <RadioGroup.Label as="p">{item.nombre}</RadioGroup.Label>
                                                <RadioGroup.Description
                                                    as="span"
                                                    className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}
                                                >
                                                    <span>SKU: {item.codigoproducto}</span>
                                                </RadioGroup.Description>
                                                {item.estado ? (
                                                    <span
                                                        className={classNames(
                                                            active ? "border" : "border-2",
                                                            checked ? "border-indigo-500" : "border-transparent",
                                                            "pointer-events-none absolute -inset-px rounded-md"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            stroke="currentColor"
                                                        >
                                                            <line
                                                                x1={0}
                                                                y1={100}
                                                                x2={100}
                                                                y2={0}
                                                                vectorEffect="non-scaling-stroke"
                                                            />
                                                        </svg>
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                {/* Formulario Receta */}
                <div className="">
                    <form className="mx-auto max-w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2">
                            <div className="sm:grid-cols-1">
                                <label htmlFor="fecha-receta" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Fecha
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="date"
                                        id="fecha-receta"
                                        autoComplete="fecha-receta"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid-cols-1">
                                <label htmlFor="no-receta" className="block text-sm font-semibold leading-6 text-gray-900">
                                    No. Receta
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="no-receta"
                                        autoComplete="no-receta"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        value={objetoDespacho?.paciente.identificacion}
                                        id="dni-paciente"
                                        autoComplete="dni-paciente"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register("paciente.nombre", {
                                            required: "Nombre de paciente requerido",
                                            minLength: {
                                                value: 6,
                                                message: "Nombre de paciente debe tener mínimo seis caracteres",
                                            },
                                            pattern: /^[A-Za-z]+$/i,
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
                                {/* <div className="flex-initial w-20">Tratamiento</div> */}
                                <div className="flex-initial w-10"></div>
                                <div className="flex-initial w-10"></div>
                            </div>
                            <div className="col-span-full border-b border-gray-900/10 h-64 overflow-y-auto">
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {recetaProductos.map((product) => (
                                            <li key={product.id} className="flex py-2 gap-1">
                                                <div className="flex-1 w-64 justify-between text-base font-medium text-gray-900">
                                                    <h3>{product.nombre}</h3>
                                                    <p className="mt-1 text-sm text-gray-500">SKU: {product.codigoproducto}</p>
                                                    <p className="text-gray-500">Stock: {product.stock}</p>
                                                </div>
                                                <div className="flex-initial w-20">
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        id="price"
                                                        className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="flex-initial w-20">
                                                    <input
                                                        type="number"
                                                        name="cant-des"
                                                        id="cant-des"
                                                        className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {/* <div className="flex-initial w-20">
                                                    <input
                                                        type="number"
                                                        name="tratamiento"
                                                        id="tratamiento"
                                                        className="w-full rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div> */}
                                                <div className="flex-initial w-10">
                                                    <button
                                                        type="button"
                                                        className="px-2 py-2 rounded bg-gray-600 font-medium text-center hover:bg-gray-500"
                                                        onClick={() => alert("open modal")}
                                                    >
                                                        <PencilIcon className="text-white h-5" aria-hidden="true" />
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
                                        {...register("identificareceptor", {
                                            required: "Identificación de receptor requerido",
                                        })}
                                    />
                                    {errors.identificareceptor && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.identificareceptor.message}
                                        </p>
                                    )}
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
                                            required: "Nombre de receptor requerido",
                                            minLength: {
                                                value: 6,
                                                message: "Nombre de paciente debe tener mínimo seis caracteres",
                                            },
                                            pattern: /^[A-Za-z]+$/i,
                                        })}
                                    />
                                    {errors.nombrereceptor && (
                                        <p role="alert" className="mt-1 truncate text-xs leading-5 text-red-500">
                                            {errors.nombrereceptor.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Observación
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={2}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
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
            <ModalDistribucionLote isOpen={modalDistLoteIsOpen} setIsOpen={openCloseModalDistLote} />
        </div>
    );
}
