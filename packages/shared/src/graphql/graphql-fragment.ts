import { gql } from '@apollo/client';

export const TERMINAL_USUARIO_FIELDS = gql`
	fragment terminalUsuarioListFields on TerminalUsuarioList {
        terminal {
            id
            nombre
        }
	}
`
