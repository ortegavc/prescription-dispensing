import { gql } from '@apollo/client';
import { PRODUCTO_BODEGA_COLLECTION_FIELDS } from './fragment';

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