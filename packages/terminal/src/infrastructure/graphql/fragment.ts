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