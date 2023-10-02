import { gql } from '@apollo/client';


export const RECETA_ELECTRONICA_FIELDS = gql`
    fragment recetaElectronicaFields on Receta {
                id
                oid
                acompaniante
                acompaniante_cedula
                fecha_caducidad
                fecha_receta
                numero_receta
                paciente {
                    apellidos
                    fecha_nacimiento
                    identificacion
                    nombres
                    tipo_identificacion_id
                }
                recetaDetalle {
                    cantidad_dispensada
                    cantidad_prescrita
                    duracion_tratamiento
                    id
                    medicamento_sku
                    oid
                }
            }
       `