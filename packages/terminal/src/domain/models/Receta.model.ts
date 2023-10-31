export interface IProducto {
    codigoproducto: string;
    estado: boolean;
    id: number;
    manejaLote: boolean;
    nombre: string;
    stock: number;
    cantidadrequerida: number;
    cantidaddespachada: number;
    unidadmedida_id: number;
    lotes: IStockProductoBodegaItem[];
}

export interface IProductoByCodigo {
    codigobarras: string;
    codigoproducto: string;
    descripcion: string;
    estado: boolean;
    id: number;
    manejalote: boolean;
    nombre: string;
    nombrecomercial?: string;
    unidadmedida_id: number;
}

export interface IStockProductoBodegaItem {
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