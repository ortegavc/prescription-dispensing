// Modelo de datos para la pantalla de despacho de recetas
export interface IDespacho {
    numeroreceta: string;
    identificareceptor: string | null;
    nombrereceptor: string | null;
    recetaelectronica: number;
    paciente: IDespachoPaciente;
    oid: string;
    turno_id: number;
    despachodetalle: IDespachoDetalle[];
}

export interface IDespachoDetalle {
    cantidaddespachada: number;
    cantidaddispensada: number;
    cantidadrequerida: number;
    lote_id: number;
    producto_id: number;
    receta_oid: string;
}

export interface IDespachoPaciente {
    id: number;
    cttipoidentificacion_id: number;
    identificacion: string;
    nombre: string;
}

/**
 * IMPLEMENTACIÓN DE LA CLASE
 */

export class PrescripcionMedica implements IDespacho {
    numeroreceta: string;
    identificareceptor: string;
    nombrereceptor: string;
    recetaelectronica: number;
    paciente: IDespachoPaciente;
    oid: string;
    turno_id: number;
    despachodetalle: IDespachoDetalle[];

    constructor(
        numeroreceta: string,
        identificareceptor: string,
        nombrereceptor: string,
        recetaelectronica: number,
        paciente: IDespachoPaciente,
        oid: string,
        turno_id: number,
        despachodetalle: IDespachoDetalle[]
    ) {
        this.numeroreceta = numeroreceta;
        this.identificareceptor = identificareceptor;
        this.nombrereceptor = nombrereceptor;
        this.recetaelectronica = recetaelectronica;
        this.paciente = paciente;
        this.oid = oid;
        this.turno_id = turno_id;
        this.despachodetalle = despachodetalle;
    }
}

/**
 * INICIALIZACIÓN DE LA CLASE
 */
const pacientePersona: IDespachoPaciente = {
    id: 0,
    cttipoidentificacion_id: 49,
    identificacion: "",
    nombre: "",
};

export const initialState: IDespacho = {
    numeroreceta: "",
    identificareceptor: "",
    nombrereceptor: "",
    recetaelectronica: 0,
    paciente: pacientePersona,
    oid: "",
    turno_id: 125,
    despachodetalle: [],
};
