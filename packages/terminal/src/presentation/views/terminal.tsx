import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { graphql } from "@msp/shared";

interface FilterableListProps {
    query: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ProductInterface {
    id: number;
    nombre: string;
    sku: string;
    stock: string;
    qty: number;
}

const products = [
    {
        id: 1,
        nombre: "Aspirin",
        sku: "ASPIRIN-123",
        stock: 100,
    },
    {
        id: 2,
        nombre: "Ibuprofen",
        sku: "IBUPROFEN-456",
        stock: 75,
    },
    {
        id: 3,
        nombre: "Antiseptic Ointment",
        sku: "ANTISEPTIC-789",
        stock: 50,
    },
    {
        id: 4,
        nombre: "Cough Syrup",
        sku: "COUGH-321",
        stock: 120,
    },
    {
        id: 5,
        nombre: "Bandages",
        sku: "BANDAGES-654",
        stock: 200,
    },
    {
        id: 6,
        nombre: "Antacid Tablets",
        sku: "ANTACID-987",
        stock: 90,
    },
    {
        id: 7,
        nombre: "First Aid Kit",
        sku: "FIRSTAID-789",
        stock: 15,
    },
    {
        id: 8,
        nombre: "Digital Thermometer",
        sku: "THERMOMETER-567",
        stock: 30,
    },
    {
        id: 9,
        nombre: "Eye Drops",
        sku: "EYEDROPS-234",
        stock: 60,
    },
    {
        id: 10,
        nombre: "Pain Relief Gel",
        sku: "PAINRELIEF-456",
        stock: 40,
    },
    {
        id: 11,
        nombre: "Cotton Balls",
        sku: "COTTONBALLS-123",
        stock: 150,
    },
    {
        id: 12,
        nombre: "Allergy Medication",
        sku: "ALLERGY-789",
        stock: 70,
    },
];

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

export default function Terminal() {
    const { useProductoBodegaCollectionLazyQuery } = graphql;
    const [getProductoBodegaCollectionLazyQuery] = useProductoBodegaCollectionLazyQuery();
    const [agreed, setAgreed] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [recetaProductos, setRecetaProductos] = useState<ProductInterface[]>([]);
    const [selected, setSelected] = useState<ProductInterface | null>(null);

    useEffect(() => {
        if (selected !== null) {
            console.log("Un producto ha sido seleccionado", selected);
            // Check if an object with the same id does not already exist in the array
            const isNotInArray = !recetaProductos.some((item) => item.id === selected.id);

            if (isNotInArray) {
                // If it's not in the array, push it
                setRecetaProductos([...recetaProductos, selected]);
            }
            console.log(recetaProductos);
        }

        if (query.length >= 3) {
            getProductoBodegaCollectionLazyQuery({
                variables: {
                    inputWhere: { bodega_id: { is: 2 }, producto: { nombre: { contains: query } } },
                    inputOrder: { asc: "producto.nombre" },
                },
                onCompleted: (c: any) => {
                    console.log("getProductoBodegaCollectionLazyQuery completed");
                    console.info(c);
                },
            });
        }
    }, [query, selected]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    return (
        <div className="isolate bg-white px-6 py-4 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Despacho de Recetas</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="lg:col-span-2">
                    <div className="border rounded px-2 py-2">
                        <SearchBar query={query} onChange={handleChange} />
                        <RadioGroup value={selected} onChange={setSelected} className="">
                            <RadioGroup.Label className="sr-only">Seleccione un producto</RadioGroup.Label>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {products.map((item) => (
                                    <RadioGroup.Option
                                        key={item.id}
                                        value={item}
                                        disabled={!item.stock}
                                        className={({ active }) =>
                                            classNames(
                                                item.stock
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
                                                    <span>SKU: {item.sku}</span>
                                                </RadioGroup.Description>
                                                {item.stock ? (
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
                <div className="lg:col-span-1">
                    <form action="#" method="POST" className="mx-auto mt-8 max-w-full sm:mt-12">
                        <div className="grid grid-cols-1 gap-x-2 sm:grid-cols-2">
                            <div>
                                <label htmlFor="no-receta" className="block text-sm font-semibold leading-6 text-gray-900">
                                    No. Receta
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="no-receta"
                                        id="no-receta"
                                        autoComplete="no-receta"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Paciente
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full px-2 py-2 flex justify-between text-sm font-medium leading-6 text-gray-900 border-b border-gray-900/10">
                                <p>Producto</p>
                                <p>Cantidad</p>
                            </div>
                            <div className="col-span-full border-b border-gray-900/10">
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {recetaProductos.map((product) => (
                                            <li key={product.id} className="flex my-2">
                                                {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.nombre}
                                                    alt={product.nombre}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                                </div> */}
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <div>
                                                            <h3>{product.nombre}</h3>
                                                            <p className="mt-1 text-sm text-gray-500">{product.sku}</p>
                                                            <p className="text-gray-500">Qty {product.stock}</p>
                                                        </div>
                                                        {/* <p className="ml-4">{product.qty || 0}</p> */}
                                                        <div>
                                                            <div className="relative mt-2 rounded-md shadow-sm">
                                                                {/* <span className="absolute inset-y-0 left-0 flex items-center">
                                                                    <button
                                                                    type="button"
                                                                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                    >
                                                                    <ChevronDownIcon
                                                                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    </button>
                                                                </span> */}
                                                                <input
                                                                    type="number"
                                                                    name="price"
                                                                    id="price"
                                                                    className="block w-20 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    placeholder="0"
                                                                />
                                                                {/* <span className="absolute inset-y-0 right-0 flex items-center">
                                                                    <button
                                                                    type="button"
                                                                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                    >
                                                                    <ChevronUpIcon
                                                                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    </button>
                                                                </span> */}
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-end text-sm pr-1">
                                                                <button
                                                                    type="button"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    Suprimir
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
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
        </div>
    );
}
