import { gql } from '@apollo/client/core';

import { DESPACHO_CREATE_FIELDS } from './fragment';

export const DESPACHO_CREATE = () => {
    return gql`
        ${DESPACHO_CREATE_FIELDS}
        mutation DespachoCreate($dataInput: DespachoCreateInput!) {
            despachoCreate(dataInput: $dataInput) {
                ... despachoCreateFields
            }
        }
    `
}