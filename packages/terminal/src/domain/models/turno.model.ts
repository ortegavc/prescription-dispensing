/**
 * Contiene informacion del turno
 */
export interface ITurno {
    id: number;
    numeroturno: String;
    numerodispensacion: number;
    estado: number;
    fechainicio: string;
    usuario:string;
    idUsuario:number;
    rolUsuario?:string;
}

export const initialState: ITurno = {
    id: 0,
    numeroturno: "",
    numerodispensacion: 0,
    estado: 0,
    fechainicio: "",
    usuario:"",
    idUsuario:0,
    rolUsuario:""
};

                       

