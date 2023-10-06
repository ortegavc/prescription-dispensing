import React from "react";

interface StockProductoBodegaListProps {
    lotes: any[];
}

export function StockProductoBodegaListComponent({ lotes }: StockProductoBodegaListProps) {
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
                {lotes.map((producto, index) => (
                    <div className="table-row">
                        <div className="table-cell border">{producto.LOTEID}</div>
                        <div className="table-cell border">{producto.UNIDADMEDIDAABREVIATURA}</div>
                        <div className="table-cell border">{producto.FECHACADUCIDAD}</div>
                        <div className="table-cell border">{producto.CANTIDAD}</div>
                        <div className="table-cell border">{producto.CANTIDADDISTRIBUIDA}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
