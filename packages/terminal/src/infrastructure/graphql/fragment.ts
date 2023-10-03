import { gql } from '@apollo/client';


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