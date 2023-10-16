import React from "react";
import { RadioGroup } from "@headlessui/react";

interface GridProductosProps {
    productoGridSelected: Producto | null;
    productosRadioGroup: Producto[] | [];
    setProductoGridSelected: (productoGridSelected: Producto) => void;
    setProductosRadioGroup: (productosRadioGroup: Producto[]) => void;
}

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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export function GridProductos({
    productoGridSelected,
    setProductoGridSelected,
    productosRadioGroup,
    setProductosRadioGroup,
}: GridProductosProps) {
    return (
        <RadioGroup value={productoGridSelected} onChange={setProductoGridSelected} className="h-96 overflow-y-auto">
            <RadioGroup.Label className="sr-only">Seleccione un producto</RadioGroup.Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productosRadioGroup.map((item) => (
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
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                        </svg>
                                    </span>
                                )}
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
}
