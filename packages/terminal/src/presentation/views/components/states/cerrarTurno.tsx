import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { graphql, useEventDispatcher } from "@msp/shared";
import { addTerminal } from '@presentation/actions'
import { RootState } from '@presentation/stores';
import { useNavigate } from 'react-router-dom';

export const TurnoCloseButton = () => {

    const terminal : any = useSelector<RootState>((state) => state.terminal);
    const navigate = useNavigate();
    const eventDispatcher = useEventDispatcher();
    const dispatch = useDispatch();
    const {
        useTerminalUsuarioListLazyQuery,
        useTurnoOpenMutation,
        useTurnoCloseMutation
    } = graphql;
    //CERRAR TURNO
    const [cerrarTurno] = useTurnoCloseMutation({
        onCompleted: (data: any) => {

            
            dispatch(
                addTerminal({
                    data: null
                })
            );
            eventDispatcher.dispatch("infoUserClicked", {
                type: "infoUserClicked",
                nombre: "",
                bodega: " ",
                nombreTerminal: "Terminal cerrada",
                numeroturno: "",
            });
            //Retorna al panel principal
            navigate('/terminal'); 
        },
        onError: (error: any) => {

            console.log('MonError', error);
        },
    });

    const handleTurnoClose = () => {

        if (terminal.turno.id) {
            cerrarTurno({
                variables: {
                    dataInput: {
                        id: terminal.turno.id, observacioncierre: 'Cerrado desde el módulo de despacho'
                    }
                }
            });
        }



    };

    return (

        <button
            className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600 focus:outline-none top-right"
            onClick={handleTurnoClose}
        >
            Cerrar Terminal
        </button>
    );
};


