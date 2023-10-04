import { gql } from '@apollo/client';

export const PRODUCTO_BODEGA_COLLECTION_FIELDS = gql`
    fragment productoBodegaCollectionFields on ProductoBodegaCollectionType {
        data {
            bodega_id
            producto_id            
            bodega {
                descripcion
                nombre
            }
            producto {
                id
                nombre
                codigoproducto
                cttipoproducto {
                    nombre
                }
                manejalote
                manejacaducidad
                unidadmedida{
                    abreviatura
                    id
                    nombre
                }
            }
        }
        pageInfo {
            count
            hasNextPage
            hasPreviousPage
            limit
            offset
        }
    }
`

export const PRODUCTO_STOCK_BODEGA_FIELDS = gql`
    fragment productoStockBodegaFields on ProductoStockBodegaStock{
        id
        producto_id
        bodega_id
        valorpromedio
        consumopromediomensual
        costoinicial
        productostockent_id
        saldo
        saldodisponible
        stockcomprometido
        stockdespacho
        stockinicial
        producto {
            id
            codigoproducto
            nombrecomercial
            unidadmedida {
                id
                abreviatura
            }
            cttipoproducto {
                id
                nombre
            }
            nombre
        }
    }
`

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