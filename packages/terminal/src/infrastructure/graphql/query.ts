import { gql } from '@apollo/client';

import { PRODUCTO_BODEGA_COLLECTION_FIELDS, PRODUCTO_STOCK_BODEGA_FIELDS, STOCK_PRODUCTO_BODEGA_FIELDS , RECETA_ELECTRONICA_FIELDS,TERMINAL_USUARIO_FIELDS} from './fragment';

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

export const GET_RECETA_ELECTRONICA = () => {
    return gql`
        ${RECETA_ELECTRONICA_FIELDS}
           query Receta( 
            $oid: String!
            ){
                Receta(
                    oid: $oid
                ){
                    ...recetaElectronicaFields
                }
            }            
            `
}
export const GET_STOCK_PRODUCTO_ENTIDAD = () => {
    return gql`
        ${STOCK_PRODUCTO_BODEGA_FIELDS}
            query StockProductoBodegaList(
                $bodega_id: Int!,
                $caducado: Boolean!,
                $cantidad:Int!,
                $entidad_id:Int!,
                $producto_id:Int!
            ){
                stockProductoBodegaList(
                    bodega_id: $bodega_id,
                    caducado: $caducado,
                    cantidad: $cantidad,
                    entidad_id:$entidad_id,
                    producto_id:$producto_id
                ){
                    ...stockProductoBodegaFields
                }
            }
        `
}

export const GET_TERMINAL_USUARIOS = ()=>{
    return gql`
        ${TERMINAL_USUARIO_FIELDS}
           query TerminalUsuarioList( 
            $usuario_id: String!
            ){
                terminalUsuarioList(
                    usuario_id: $usuario_id
                ){
                    ...terminalUsuarioListFields
                }
            }            
        `
}