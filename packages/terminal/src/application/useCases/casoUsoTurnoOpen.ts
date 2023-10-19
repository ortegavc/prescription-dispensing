/**
 * Contiene informacion de la terminal
 */
interface turnoOpen {

    id: number;
    estado: number;
    fechacierre: string;
    fechainicio: string;
    numerodispensacion: number;
    numeroturno: String
    observacioncierre: String
    
    terminal_id: number;
   
    usuario_id: String


}


export const initialStateTurnoOpen = {
    idBodega: ''
}