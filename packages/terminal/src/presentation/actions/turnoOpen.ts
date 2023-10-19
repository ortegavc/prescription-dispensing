


import { createSlice } from "@reduxjs/toolkit";

import { initialStateTurnoOpen } from "@application/useCases";

export const turnoOpenActions = createSlice({
    name: "Despacho",
    initialStateTurnoOpen,
    reducers: {
       
        setViewNotificacion:(state,action)=>{
            state.viewNotificacion.open=(action.payload.open)?action.payload.open:false;
            state.viewNotificacion.title=(action.payload.title)?action.payload.title:'';
            state.viewNotificacion.onConfirm=(action.payload.onConfirm)?action.payload.onConfirm:()=>{};
        },
    },
});

export const { setViewNotificacion } =
turnoOpenActions.actions;
