import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { IProducto } from "@domain/models";
import { graphql } from "@msp/shared";
import { useSelector } from "react-redux";
import { RootState } from "@presentation/stores";

interface FilterableListProps {
    placeholder: string;
    setProductosRadioGroup: (p: IProducto[]) => void;
    setMensajeGridProductos: (m: string) => void;
}

export function SearchBar({ placeholder, setProductosRadioGroup, setMensajeGridProductos }: FilterableListProps) {
    const { useProductoBodegaCollectionLazyQuery } = graphql;
    const [getProductoBodegaCollectionLazyQuery] = useProductoBodegaCollectionLazyQuery();
    const terminal: any = useSelector<RootState>((state) => state.terminal);
    const [query, setQuery] = useState<string>("");

    const search = () => {
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
                placeholder={placeholder}
                value={query}
                onChange={handleChangeSearchBar}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.keyCode === 13) {
                        console.log("Ha puldaso Enter", e);
                        if (query.length >= 3) {
                            search();
                        }
                    }
                }}
            />
        </div>
    );
}
