// import {
//     setMensajes,
//     setViewNotificacion,
//     setCache,
//     setLoadView,
// } from "@presentation/actions";

import { Console } from "console";

// export const closeMessage_RA = (metodos: any) => {
//     metodos.dispatch(setLoadView(false));
//     metodos.dispatch(setCache("cache-first"));
// };

// export const notificacionForm_RA = (metodos: any, dataSave: any) => {
//     createDespacho(metodos, dataSave);
//     // metodos.dispatch(setViewNotificacion({ open: false }));
// };

export const createDespachoService = (data: any, mutator: any) => {
    mutator.create({
        variables: {
            dataInput: data,
        },
        // refetchQueries: [{ query: dataSave.document }],
        onCompleted: () => {
            console.log('mutation completed');

            // metodos.dispatch(setCache("cache-and-network"));
            // metodos.dispatch(
            //     setMensajes({
            //         label: `Registro creado correctamente`,
            //         tipo: "info",
            //     })
            // );
            // metodos.dispatch(setLoadView(false));
            // setTimeout(() => closeMessage_RA(metodos), 4500);
        },
        onError: (error: any) => {
            console.error(error);
            // metodos.dispatch(setLoadView(false));
            // metodos.dispatch(setMensajes({ label: error.message, tipo: "error" }));
            // setTimeout(() => closeMessage_RA(metodos), 4500);
        },
    });
}