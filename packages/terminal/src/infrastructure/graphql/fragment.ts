import { gql } from '@apollo/client';


export const DESPACHO_CREATE_FIELDS = gql`
    fragment despachoCreateFields on DespachoResult {
        code
        message
        status
    }
`

export const PRODUCTO_BODEGA_COLLECTION_FIELDS = gql`
    fragment productoBodegaCollectionFields on ProductoBodegaCollectionType {
        data {
            bodega_id
            bodega {
                descripcion
                nombre
            }
            producto {
                codigoproducto
                estado
                id
                nombre
                nombrecomercial
                manejacaducidad
                manejalote
                unidadmedida_id
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
        bodega_id
        producto_id
        saldo
        stockcomprometido
        stockdespacho
        stockinicial
        valorpromedio        
    }
`

export const STOCK_PRODUCTO_BODEGA_FIELDS = gql`
    fragment stockProductoBodegaFields on StockProductoBodegaList
    {        
        CANTIDAD
        CANTIDADDISTRIBUIDA
        CODIGOPRODUCTO
        COSTO
        FECHACADUCIDAD
        LOTEID
        NOMBRE
        NUMEROLOTE
        PRODUCTOID
        UNIDADMEDIDAABREVIATURA
        UNIDADMEDIDAID
        UNIDADMEDIDANOMBRE
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