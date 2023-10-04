import { Adapter } from "./adapter.Interface";
import { IDespacho, IDespachoDetalle, IDespachoPaciente } from "@domain/models";
import { IRecetaElectronica, IRecetaDetalle, IRecetaPaciente } from "./recetaElectronica.Model";

/**
 * Clase RecetaElectronicaAdapter
 * 
 * Autor: Álvaro Sánchez
 * Fecha: 2023-09-02
 * 
 * Una clase diseñada para transformar los datos proporcionados por la API de receta electrónica (GraphQL) 
 * en un formato compatible con el módulo de despacho, permitiendo así el registro de la salida de medicamentos 
 * de manera eficiente y precisa.
 */
export class RecetaElectronicaAdapter implements Adapter<IDespacho> {
  /**
   * Método adapt
   * 
   * Este método adapta los datos de una receta electrónica a un objeto de despacho.
   * 
   * @param receta - Los datos de la receta electrónica que se van a adaptar.
   * @returns - Un objeto de despacho adaptado a partir de los datos de la receta.
   */
  adapt(receta: IRecetaElectronica): IDespacho {
      // Validación de datos
      if (!receta || !receta.numero_receta) {
          throw new Error("Datos de receta electrónica incompletos o incorrectos- numero_receta.");
      }

      const recetaDetalle = receta.recetaDetalle.map((item: IRecetaDetalle) => this.adaptDetalle(item));

      // Manejo de sesión y conversión segura
      const turnoId = parseInt(sessionStorage.getItem("turno_id") || "0", 10);

      return {
          numeroreceta: String(receta.numero_receta),
          identificareceptor: String(receta.acompaniante_cedula),
          nombrereceptor: receta.acompaniante,
          oid: receta.oid,
          recetaelectronica: 1, // 1-> El despacho tiene origen una receta electrónica
          turno_id: turnoId, // Utiliza el valor obtenido de manera segura
          paciente: this.adaptPaciente(receta.paciente),
          despachodetalle: recetaDetalle,
      };
  }

  /**
   * Método adaptPaciente
   * 
   * Método encargado de transformar los datos del paciente, previamente obtenidos a través de la receta electrónica,
   * garantizando su adecuada adaptación y preparación para su uso posterior en el sistema.
   * 
   * @param paciente - Los datos del paciente obtenidos de la receta electrónica.
   * @returns - Un objeto de paciente de despacho adaptado a partir de los datos del paciente de la receta.
   */
  adaptPaciente = (paciente: IRecetaPaciente): IDespachoPaciente => {
      // Validación de datos
      if (!paciente  || !paciente.identificacion) {
          throw new Error("Datos de paciente de receta electrónica incompletos o incorrectos.- identificacion");
      }

      return {
          id: 0,
          cttipoidentificacion_id: paciente.tipo_identificacion_id, // Se debe homologar los catálogos
          identificacion: paciente.identificacion,
          nombre: `${paciente.nombres} ${paciente.apellidos}`, 
      };
  };

  /**
   * Método adaptDetalle
   * 
   * Método destinado a recuperar los detalles de los medicamentos y prescripciones.
   * 
   * @param recetaDetalle - Los detalles de medicamentos y prescripciones obtenidos de la receta electrónica.
   * @returns - Un objeto de detalle de despacho adaptado a partir de los detalles de medicamentos y prescripciones.
   */
  adaptDetalle = (recetaDetalle: IRecetaDetalle): IDespachoDetalle => {
      // Validación de datos
      if (!recetaDetalle || !recetaDetalle.cantidad_prescrita) {
          throw new Error("Datos de detalle de receta electrónica incompletos o incorrectos.-cantidad_prescrita");
      }

      return {
          cantidaddespachada: 0,
          cantidaddispensada: recetaDetalle.cantidad_dispensada,
          cantidadrequerida: recetaDetalle.cantidad_prescrita,
          costo: 0,
          lote_id: 0,
          producto_id: 0,
          unidadmedida_id: "",
          receta_oid: recetaDetalle.oid,
      };
  };
}
