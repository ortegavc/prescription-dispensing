import { gql } from '@apollo/client/core';

import { DESPACHO_CREATE_FIELDS, TURNO_OPEN_FIELDS } from './fragment';

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

export const TURNO_OPEN = () => {
    return gql`
        ${TURNO_OPEN_FIELDS}
        mutation TurnoOpen($dataInput: TurnoOpenInput!) {
            turnoOpen(dataInput: $dataInput) {
                ... turnoOpenCreateFields
            }
        }
    `
}