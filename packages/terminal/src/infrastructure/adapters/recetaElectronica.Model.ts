export interface IRecetaElectronica {
    oid: string;
    fecha_receta: string;
    fecha_caducidad: string;
    acompaniante_cedula: string | null;
    acompaniante: string | null;
    paciente: {
      persona: IPersona
    };
    recetaDetalle: IRecetaDetalle[];
  }
  
  export interface IPersona {
        tipo_identificacion_id: number;
        identificacion: string;
        apellidos: string;
        nombres: string;
        fecha_nacimiento: string;
  }

  export interface  IRecetaDetalle {
    cantidad_prescrita: number;
    duracion_tratamiento: number;
    cantidad_dispensada: number;
    oid: string;
    medicamento_sku: string;
  }


 export class RecetaElectronica implements IRecetaElectronica {
    oid: string;
    fecha_receta: string;
    fecha_caducidad: string;
    acompaniante_cedula: string | null;
    acompaniante: string | null;
    paciente: {
      persona: IPersona;
    };
    recetaDetalle: IRecetaDetalle[];
  
    constructor(
      oid: string,
      fecha_receta: string,
      fecha_caducidad: string,
      acompaniante_cedula: string | null,
      acompaniante: string | null,
      paciente: {
        persona: IPersona;
      },
      recetaDetalle: IRecetaDetalle[]
    ) {
      this.oid = oid;
      this.fecha_receta = fecha_receta;
      this.fecha_caducidad = fecha_caducidad;
      this.acompaniante_cedula = acompaniante_cedula;
      this.acompaniante = acompaniante;
      this.paciente = paciente;
      this.recetaDetalle = recetaDetalle;
    }
  }
  
  // Ejemplo de uso:
  const pacientePersona: IPersona = {
    tipo_identificacion_id: 1,
    identificacion: "1234567890",
    apellidos: "Maldonado Cevallos",
    nombres: "Hugo Marcelo",
    fecha_nacimiento: "2000-01-01",
  };
  
  const recetaDetalle: IRecetaDetalle[] = [
    {
      cantidad_prescrita: 10,
      duracion_tratamiento: 7,
      cantidad_dispensada: 10,
      oid: "1.0001",
      medicamento_sku: "MED001",
    },
    {
      cantidad_prescrita: 20,
      duracion_tratamiento: 14,
      cantidad_dispensada: 0,
      oid: "1.0002",
      medicamento_sku: "MED002",
    },
  ];
  
  const prescripcionMedica = new RecetaElectronica(
    "1.000912.00007543",
    "2023-08-21T16:58:11.000Z",
    "2023-09-24T04:59:59.000Z",
    '1712472784',
    'Pedro Lopez',
    { persona: pacientePersona },
    recetaDetalle
  );
  
  console.log(prescripcionMedica);
  