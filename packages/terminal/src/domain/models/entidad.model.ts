export interface IEntidad {
    id?: number;
    nombre: String;
    unicodigo: String;
    direccion?: String;
}

export const initialState: IEntidad = {
    nombre: "",
    unicodigo: "",
};
