import { createSlice } from "@reduxjs/toolkit";

// Importa las interfaces y la clase desde el módulo models
import { IDespachoDetalle, IDespachoPaciente, initialState } from "@domain/models";

export const despachoActions = createSlice({
    name: "Despacho",
    initialState,
    reducers: {
        loadDesapacho(state, action) {
            return { ...state, ...action.payload.objetoDespacho };
        },
        addDespacho: (state, action) => {
            return { ...state, ...action.payload };
        },

        updateDespacho: (state, action) => {
            return { ...state, ...action.payload };
          
        },

        addMedicamento: (state, action) => {
            const nuevoDetalle: IDespachoDetalle = {
                cantidaddespachada: action.payload.cantidaddespachada,
                cantidaddispensada: action.payload.cantidaddispensada,
                cantidadrequerida: action.payload.cantidadrequerida,
                costo: action.payload.costo,
                lote_id: action.payload.lote_id,
                producto_id: action.payload.producto_id,
                unidadmedida_id: action.payload.unidadmedida_id,
                receta_oid: action.payload.oid,
            };

            state.despachodetalle.push(nuevoDetalle);
        },
        updateMedicamento: (state, action) => {
            const medicamentoActualizado = action.payload;
            const detalleIndex = state.despachodetalle.findIndex(
                (detalle) => detalle.receta_oid === medicamentoActualizado.oid
            );

            if (detalleIndex !== -1) {
                state.despachodetalle[detalleIndex] = medicamentoActualizado;
            }
        },
        deleteMedicamento: (state, action) => {
            const medicamentoAEliminar = action.payload.oid;
            state.despachodetalle = state.despachodetalle.filter((detalle) => detalle.receta_oid !== medicamentoAEliminar);
        },
    },
});

export const {loadDesapacho, addDespacho, updateDespacho, addMedicamento, updateMedicamento, deleteMedicamento } =
despachoActions.actions;