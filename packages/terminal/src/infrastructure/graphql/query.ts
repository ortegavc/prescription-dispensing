import { gql } from '@apollo/client';
import { PRODUCTO_BODEGA_COLLECTION_FIELDS, PRODUCTO_STOCK_BODEGA_FIELDS } from './fragment';

export const GET_PRODUCTO_BODEGA_COLLECTION = () => {
    return gql`
        ${PRODUCTO_BODEGA_COLLECTION_FIELDS}
           query ProductoBodegaCollection( 
                $inputWhere: ProductoBodegaFilterInput, 
                $inputOrder: StringOrderInput, 
                $inputPagination: PaginationInput
            ){
                productoBodegaCollection(
                    where: $inputWhere
                    order: $inputOrder
                    pagination: $inputPagination
                ){
                    ...productoBodegaCollectionFields
                }
            }            
        `
}

export const GET_PRODUCTO_STOCK_BODEGA_LIST = () => {
    return gql`
        ${PRODUCTO_STOCK_BODEGA_FIELDS}
           query ProductoStockBodega( 
            $bodegaId: Int!,
            $productoId: Int!
            ){
                productoStockBodega(
                    bodega_id: $bodegaId,
                    producto_id: $productoId
                ){
                    ...productoStockBodegaFields
                }
            }            
        `
}