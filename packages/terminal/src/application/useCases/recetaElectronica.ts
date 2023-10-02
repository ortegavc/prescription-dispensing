import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@presentation/stores";
import { addCabecera, addMedicamento } from '@presentation/actions';


export const casoUsoRecetaElectronica = () => {

 const dispatch: AppDispatch = useDispatch();


 const buscarReceta: any(oid:string)=>{
    
 }

// // Luego, en algún lugar de tu componente o función para cargar los datos de la API:
// const fetchDataFromApi = async () => {
//   try {
//     const response = await fetch("URL_DE_LA_API");
//     const data = await response.json();

//     // Despacha la acción para cargar los datos en el store
//     dispatch(cargarDatosApi(data));
//   } catch (error) {
//     // Maneja los errores de la solicitud
//     console.error("Error al cargar datos de la API:", error);
//   }
// };

}