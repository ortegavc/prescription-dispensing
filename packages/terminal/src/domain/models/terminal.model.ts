import { Bodega } from './bodega.model';
export { EntidadModel } from './entidad.model';

export interface Terminal {
    bodega: Bodega;
    bodega_id: number;
    codigo: String;
    entidad: EntidadModel;
    entidad_id: number;
    enuso: number;
    estado: number;
    id: number;
    nombre: String
    observacion: String
    recetaelectronica: number;
    tipotransaccion_id: number;
}