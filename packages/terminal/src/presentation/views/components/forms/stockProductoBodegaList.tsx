import React from "react";
import { IProducto, IStockProductoBodegaItem } from "@domain/models";

interface StockProductoBodegaListProps {
    productoModal: IProducto | any;
    setProductoModal: (e: IProducto) => void;
}

export function StockProductoBodegaList({ productoModal, setProductoModal }: StockProductoBodegaListProps) {
    function handleChangeCantidad(e: React.ChangeEvent<HTMLInputElement>) {
        const index = parseInt(e.target.id.slice(8));

        const updatedLotes = productoModal.lotes.map((lote: IStockProductoBodegaItem, i: number) => {
            if (i === index) {
                return { ...lote, CANTIDADDISTRIBUIDA: parseInt(e.target.value) };
            }
            return lote;
        });

        const updatedProduct = { ...productoModal, lotes: updatedLotes };

        if (cantDistribuidaIsValid(updatedProduct.lotes[index])) {
            setProductoModal(updatedProduct);
        }
    }

    function cantDistribuidaIsValid(updatedItem: IStockProductoBodegaItem) {
        const filteredList = productoModal.lotes.filter((item: IStockProductoBodegaItem) => item.LOTEID !== updatedItem.LOTEID);
        const sumFilteredList = filteredList.reduce(
            (accumulator: number, currentObject: IStockProductoBodegaItem) => accumulator + currentObject.CANTIDADDISTRIBUIDA,
            0
        );
        const total = sumFilteredList + updatedItem.CANTIDADDISTRIBUIDA;
        return (
            updatedItem.CANTIDADDISTRIBUIDA <= updatedItem.CANTIDAD &&
            total <= productoModal.cantidadrequerida &&
            total <= stock()
        );
    }

    function stock() {
        return productoModal.lotes.reduce(
            (accumulator: number, currentObject: IStockProductoBodegaItem) => accumulator + currentObject.CANTIDAD,
            0
        );
    }

    return (
        <div className="mt-2 table w-full border">
            <div className="table-header-group">
                <div className="table-row text-center">
                    <div className="table-cell border">Lote</div>
                    <div className="table-cell border">Unidad</div>
                    <div className="table-cell border">Vence</div>
                    <div className="table-cell border">Stok</div>
                    <div className="table-cell border">Cant.</div>
                </div>
            </div>
            {productoModal && (
                <div className="table-row-group">
                    {productoModal.lotes.map((lote: IStockProductoBodegaItem, index: number) => (
                        <div className="table-row">
                            <div className="table-cell border text-center">{lote.LOTEID}</div>
                            <div className="table-cell border text-center">{lote.UNIDADMEDIDAABREVIATURA}</div>
                            <div className="table-cell border text-center">{lote.FECHACADUCIDAD}</div>
                            <div className="table-cell border flex-initial w-20 pl-2 pr-6 text-right">{lote.CANTIDAD}</div>
                            <div className="table-cell border flex-initial w-20">
                                <input
                                    type="number"
                                    id={`cant-des${index}`}
                                    min={0}
                                    className="w-full rounded-md border-0 py-0 pl-2 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3 text-right"
                                    value={lote.CANTIDADDISTRIBUIDA ?? 0}
                                    onChange={handleChangeCantidad}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
