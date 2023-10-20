export interface IBodega {
    id?: number;
    codigo: String;
    nombre: String;
}

export const initialState: IBodega = {
    codigo: "",
    nombre: "",
};
