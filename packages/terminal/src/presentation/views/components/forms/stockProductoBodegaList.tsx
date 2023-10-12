import React from "react";

interface StockProductoBodegaListProps {
    cantidadrequerida: number;
    stockProductoBodegaList: any[];
    setStockProductoBodegaList: (e: any) => void;
}

export function StockProductoBodegaListComponent({
    cantidadrequerida,
    stockProductoBodegaList,
    setStockProductoBodegaList,
}: StockProductoBodegaListProps) {
    function handleChangeCantidad(e: any) {
        console.log("handleChangeCantidadDistribuida");
        const index = e.target.id.slice(8);
        // Copy the read only array using the Spread Operator
        const auxlist = [...stockProductoBodegaList];
        // Create a copy of the object at the specified index
        const updatedItem = { ...auxlist[index] };
        // Update the property value in the copied object
        updatedItem.CANTIDADDISTRIBUIDA = parseInt(e.target.value);
        // Replace the old object with the updated one in the copied list
        auxlist[index] = updatedItem;
        if (cantDistribuidaIsValid(updatedItem)) {
            setStockProductoBodegaList(auxlist);
        }
    }

    function cantDistribuidaIsValid(updatedItem: any) {
        const filteredList = stockProductoBodegaList.filter((item) => item.LOTEID !== updatedItem.LOTEID);
        const sumFilteredList = filteredList.reduce(
            (accumulator, currentObject) => accumulator + currentObject.CANTIDADDISTRIBUIDA,
            0
        );
        const total = sumFilteredList + updatedItem.CANTIDADDISTRIBUIDA;
        return updatedItem.CANTIDADDISTRIBUIDA <= updatedItem.CANTIDAD && total <= cantidadrequerida && total <= stock();
    }

    function stock() {
        return stockProductoBodegaList.reduce((accumulator, currentObject) => accumulator + currentObject.CANTIDAD, 0);
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
            <div className="table-row-group">
                {stockProductoBodegaList.map((producto, index) => (
                    <div className="table-row">
                        <div className="table-cell border text-center">{producto.LOTEID}</div>
                        <div className="table-cell border text-center">{producto.UNIDADMEDIDAABREVIATURA}</div>
                        <div className="table-cell border text-center">{producto.FECHACADUCIDAD}</div>
                        <div className="table-cell border flex-initial w-20 pl-2 pr-6 text-right">{producto.CANTIDAD}</div>
                        <div className="table-cell border flex-initial w-20">
                            <input
                                type="number"
                                id={`cant-des${index}`}
                                min={0}
                                className="w-full rounded-md border-0 py-0 pl-2 pr-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3 text-right"
                                value={producto.CANTIDADDISTRIBUIDA ?? 0}
                                onChange={handleChangeCantidad}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
