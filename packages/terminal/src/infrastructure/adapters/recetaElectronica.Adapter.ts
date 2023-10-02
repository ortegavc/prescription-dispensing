import { Adapter } from "./adapter.Interface";
import { PrescripcionMedica } from "@domain/models";
import { RecetaElectronica } from "./recetaElectronica.Model";

export class RecetaElectronicaAdapter
  implements Adapter<PrescripcionMedica>
{
    adapt(receta: RecetaElectronica): PrescripcionMedica {
        throw new Error("Method not implemented.");
    }
    
}