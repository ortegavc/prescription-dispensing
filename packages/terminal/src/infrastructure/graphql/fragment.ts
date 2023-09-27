import { gql } from '@apollo/client';


export const PRODUCTO_BODEGA_COLLECTION_FIELDS= gql`
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