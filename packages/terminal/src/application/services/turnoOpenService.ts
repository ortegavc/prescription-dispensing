//import {  } from '@presentation/actions'
import { sharedService } from '@msp/shared';

export const turnoOpen = (metodos: any, dataSave: any) => {

    const dataTerminal = metodos.data;

    const entidadId = (localStorage.getItem('unicodigoEntidad')) as any;

    dataSave.create({
        variables: {
            inputCreate: {
                terminal_id: dataTerminal.id
            }
        },
        refetchQueries: [
            {
                query: dataSave.document
            },
        ], onCompleted: () => {
            console.log('correcto turno open')
            // metodos.dispatch(setCache('cache-and-network'));
        }, onError: (error: any) => {
            console.log('ppppp', error)
            //setTimeout(() => closeMessageTerminal(metodos), 4500);

        }

    })
}