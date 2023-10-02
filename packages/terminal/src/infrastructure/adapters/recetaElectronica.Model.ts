export interface IRecetaElectronica {
    oid: string;
    fecha_receta: string;
    fecha_caducidad: string;
    acompaniante_cedula: string | null;
    acompaniante: string | null;
    numero_receta: number;
    paciente: IPersona;
    recetaDetalle: IRecetaDetalle[];
}

export interface IPersona {
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
}

export class RecetaElectronica implements IRecetaElectronica {
    oid: string;
    fecha_receta: string;
    fecha_caducidad: string;
    acompaniante_cedula: string | null;
    acompaniante: string | null;
    numero_receta: number;
    paciente: IPersona;
    recetaDetalle: IRecetaDetalle[];

    constructor(
        oid: string,
        fecha_receta: string,
        fecha_caducidad: string,
        acompaniante_cedula: string | null,
        acompaniante: string | null,
        numero_receta: number,
        paciente: IPersona,
        recetaDetalle: IRecetaDetalle[]
    ) {
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
