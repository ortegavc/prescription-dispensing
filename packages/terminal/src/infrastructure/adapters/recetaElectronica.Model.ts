export interface IRecetaElectronica {
    id: number;
    oid: string;
    acompaniante: string | null;
    acompaniante_cedula: string | null;
    fecha_caducidad: string;
    fecha_receta: string;
    numero_receta: number;
    paciente: IRecetaPaciente;
    recetaDetalle: IRecetaDetalle[];
}

export interface IRecetaPaciente {
    tipo_identificacion_id: number;
    identificacion: string;
    apellidos: string;
    nombres: string;
    fecha_nacimiento: string;
}

export interface IRecetaDetalle {

    id: number;
    oid: string;
    cantidad_prescrita: number;
    duracion_tratamiento: number;
    cantidad_dispensada: number;
    medicamento_sku: string;
    producto: IRecetaDetalleProducto;
}

export interface IRecetaDetalleProducto {
    codigoproducto: string;
    id: number;
    manejalote: number;
    nombre: string;
    productostockbodega: IRecetaDetalleStock;
    unidadmedidaproducto: IRecetaDetalleUnidadMedida
}

export interface IRecetaDetalleStock {
    producto_id: number;
    saldo: number;
    bodega_id: number;
}

export interface IRecetaDetalleUnidadMedida {
    abreviatura: string
    id: number
    nombre: string
}

export class RecetaElectronica implements IRecetaElectronica {
    id: number;
    oid: string;
    fecha_receta: string;
    fecha_caducidad: string;
    acompaniante_cedula: string | null;
    acompaniante: string | null;
    numero_receta: number;
    paciente: IRecetaPaciente;
    recetaDetalle: IRecetaDetalle[];

    constructor(
        id: number,
        oid: string,
        fecha_receta: string,
        fecha_caducidad: string,
        acompaniante_cedula: string | null,
        acompaniante: string | null,
        numero_receta: number,
        paciente: IRecetaPaciente,
        recetaDetalle: IRecetaDetalle[]
    ) {
        this.id = id;
        this.oid = oid;
        this.fecha_receta = fecha_receta;
        this.fecha_caducidad = fecha_caducidad;
        this.acompaniante_cedula = acompaniante_cedula;
        this.acompaniante = acompaniante;
        this.numero_receta = numero_receta;
        this.paciente = paciente;
        this.recetaDetalle = recetaDetalle;
    }
}
