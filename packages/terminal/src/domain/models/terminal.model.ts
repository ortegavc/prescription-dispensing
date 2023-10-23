import { IBodega, initialState as initialStateBodega } from "./bodega.model";
import { IEntidad, initialState as initialStateEntidad } from "./entidad.model";
import { ITurno, initialState as initialStateTurno } from "./turno.model";

export interface ITerminal {
    entidad: IEntidad;
    bodega: IBodega;
    turno: ITurno;
    id: number;
    nombre: String;
    recetaElectronica:boolean;
}

export const initialState: ITerminal = {
    entidad: initialStateEntidad,
    bodega: initialStateBodega,
    turno: initialStateTurno,
    id: 0,
    nombre: "",
    recetaElectronica: false
};
