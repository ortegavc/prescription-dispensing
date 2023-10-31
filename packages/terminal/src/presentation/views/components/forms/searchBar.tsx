import React, { ReactEventHandler, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { IProducto, IProductoByCodigo } from "@domain/models";
import { graphql } from "@msp/shared";
import { useSelector } from "react-redux";
import { RootState } from "@presentation/stores";

interface FilterableListProps {
    disabled: boolean;
    placeholder: string;
    setProductosRadioGroup: (p: IProducto[]) => void;
    setMensajeGridProductos: (m: string) => void;
    setLoadingSearchProducts: (status: boolean) => void;
}

interface SelectCriterioProps {
    criterio: string;
    setCriterio: (criterio: string) => void;
}

const SelectCriterio = ({ criterio, setCriterio }: SelectCriterioProps) => {
    const handleChange = (e: any) => {
        setCriterio(e.target.value.toLowerCase());
    };

    return (
        <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="criterio" className="sr-only">
                Criterio busqueda
            </label>
            <select
                id="criterio"
                name="criterio"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                onChange={handleChange}
            >
                <option selected={criterio === "barras"}>BARRAS</option>
                <option selected={criterio === "nombre"}>NOMBRE</option>
                <option selected={criterio === "sku"}>SKU</option>
            </select>
        </div>
    );
};

export function SearchBar({
    disabled,
    placeholder,
    setProductosRadioGroup,
    setMensajeGridProductos,
    setLoadingSearchProducts,
}: FilterableListProps) {
    const { useProductoBodegaCollectionLazyQuery, useProductoByCodigoLazyQuery } = graphql;
    const [getProductoBodegaCollectionLazyQuery] = useProductoBodegaCollectionLazyQuery();
    const [getProductoByCodigoLazyQuery] = useProductoByCodigoLazyQuery();
    const terminal: any = useSelector<RootState>((state) => state.terminal);
    const [criterio, setCriterio] = useState<string>("nombre");
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        setQuery("");
        setProductosRadioGroup([]);
    }, [criterio]);

    useEffect(() => {
        if (disabled) {
            setQuery("");
            setProductosRadioGroup([]);
        }
    }, [disabled]);

    const handleSearch = () => {
        setLoadingSearchProducts(true);
        if (criterio === "nombre") {
            return searchByName();
        }
        return searchByCodigo();
    };

    const searchByCodigo = () => {
        getProductoByCodigoLazyQuery({
            variables: {
                codigobarras: criterio === "barras" ? query : null,
                codigoproducto: criterio === "sku" ? query : null,
            },
            onCompleted: (response: any) => {
                const auxArray: any[] = [];
                const productoByCodigo: IProductoByCodigo = response.productoByCodigo;
                const producto = {
                    codigoproducto: productoByCodigo.codigoproducto,
                    estado: !!productoByCodigo.estado,
                    id: productoByCodigo.id,
                    manejaLote: !!productoByCodigo.manejalote,
                    nombre: productoByCodigo.nombre,
                    unidadmedida_id: productoByCodigo.unidadmedida_id,
                };
                setProductosRadioGroup([...auxArray, producto]);
                setLoadingSearchProducts(false);
            },
        });
    };

    const searchByName = () => {
        getProductoBodegaCollectionLazyQuery({
            variables: {
                inputWhere: { bodega_id: { is: terminal.bodega.id }, producto: { nombre: { contains: query } } },
                inputOrder: { asc: "producto.nombre" },
            },
            onCompleted: (c: any) => {
                if (c.productoBodegaCollection.data.length) {
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
                } else {
                    setProductosRadioGroup([]);
                    setMensajeGridProductos(`No se encontraron productos con el criterio: ${query}`);
                }
                setLoadingSearchProducts(false);
            },
        });
    };

    useEffect(() => {
        if (query.length < 3) {
            setMensajeGridProductos("");
        }
    }, [query]);

    function handleChangeSearchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

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
                disabled={disabled}
                placeholder={placeholder}
                value={query}
                onChange={handleChangeSearchBar}
                onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.keyCode === 9 || e.keyCode === 13) {
                        if (query.length >= 3) {
                            handleSearch();
                        }
                    }
                }}
            />
            <SelectCriterio criterio={criterio} setCriterio={setCriterio} />
        </div>
    );
}
