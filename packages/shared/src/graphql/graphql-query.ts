import { gql} from '@apollo/client';
import { 
    TERMINAL_USUARIO_FIELDS
    } from './graphql-fragment';

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
