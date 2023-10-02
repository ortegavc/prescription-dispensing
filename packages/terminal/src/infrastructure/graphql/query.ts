import { gql } from '@apollo/client';
import { RECETA_ELECTRONICA_FIELDS } from './fragment';


export const GET_PRODUCTO_STOCK_BODEGA_LIST = () => {
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