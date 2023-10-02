// Modelo de datos para la pantalla de despacho de recetas
export interface IPrescripcionMedica {
    numeroreceta: string;
    identificareceptor: string;
    nombrereceptor: string;
    recetaelectronica: number;
    paciente: IPersona;
    oid: string;
    turno_id: number;
    despachodetalle: IRecetaDetalle[];
}

export interface IRecetaDetalle {
    cantidaddespachada: number;
    cantidaddispensada: number;
    cantidadrequerida: number;
    costo: number;
    lote_id: number;
    producto_id: number;
    unidadmedida_id: string;
    receta_oid: number;
}

export interface IPersona {
    id: number;
    cttipoidentificacion_id: number;
    identificacion: string;
    nombre: string;
}

/**
 * IMPLEMENTACIÓN DE LA CLASE
 */

export class PrescripcionMedica implements IPrescripcionMedica {
    numeroreceta: string;
    identificareceptor: string;
    nombrereceptor: string;
    recetaelectronica: number;
    paciente: IPersona;
    oid: string;
    turno_id: number;
    despachodetalle: IRecetaDetalle[];

    constructor(
        numeroreceta: string,
        identificareceptor: string,
        nombrereceptor: string,
        recetaelectronica: number,
        paciente: IPersona,
        oid: string,
        turno_id: number,
        despachodetalle: IRecetaDetalle[]
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
const pacientePersona: IPersona = {
    id: 0,
    cttipoidentificacion_id: 0,
    identificacion: "",
    nombre: "",
};

const recetaDetalle: IRecetaDetalle[] = [
    {
        cantidaddespachada: 0,
        cantidaddispensada: 0,
        cantidadrequerida: 0,
        costo: 0,
        lote_id: 0,
        producto_id: 0,
        unidadmedida_id: "",
        receta_oid: 0,
    },
];

export const initialState : IPrescripcionMedica = {
  numeroreceta: "",
  identificareceptor: "",
  nombrereceptor: "",
  recetaelectronica: 0,
  paciente:pacientePersona,
  oid: "",
  turno_id: 0,
  despachodetalle: recetaDetalle,
};

//export const initialStatePrescripcionMedica = new PrescripcionMedica("", "", "", 0, pacientePersona, "", 0, recetaDetalle);
