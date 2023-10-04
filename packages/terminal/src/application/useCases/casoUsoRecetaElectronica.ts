import { IRecetaElectronica } from "@infrastructure/adapters/recetaElectronica.Model";
import { IDespacho } from "@domain/models";
import { RecetaElectronicaAdapter } from "@infrastructure/adapters/recetaElectronica.Adapter";

export async function casoUsoRecetaElectronica(data: IRecetaElectronica): Promise<IDespacho> {
    const adapter = new RecetaElectronicaAdapter();
    const adaptedData = adapter.adapt(data);
    // Se puede realizar alguna operación con los datos adaptados antes de retornar el resultado
    return adaptedData;
  }

