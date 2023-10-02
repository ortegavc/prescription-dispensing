import { createSlice } from "@reduxjs/toolkit";

// Importa las interfaces y la clase desde el módulo models
import { IRecetaDetalle, IPersona, initialState } from "@domain/models";

export const prescripcionMedicaActions = createSlice({
    name: "PrescripcionMedica",
    initialState,
    reducers: {
        addCabecera: (state, action) => {
            const { numeroreceta, identificareceptor, nombrereceptor, recetaelectronica, oid, turno_id, persona } =
                action.payload;
            state.numeroreceta = numeroreceta;
            state.identificareceptor = identificareceptor;
            state.nombrereceptor = nombrereceptor;
            state.recetaelectronica = recetaelectronica;
            state.paciente = {
                id: persona.id,
                cttipoidentificacion_id: persona.cttipoidentificacion_id,
                identificacion: persona.identificacion,
                nombre: persona.nombre,
            };
            state.oid = oid;
            state.turno_id = turno_id;
        },

        updateCabecera: (state, action) => {
            const { numeroreceta, identificareceptor, nombrereceptor, recetaelectronica, oid, turno_id, persona } =
                action.payload;
            state.numeroreceta = numeroreceta;
            state.identificareceptor = identificareceptor;
            state.nombrereceptor = nombrereceptor;
            state.recetaelectronica = recetaelectronica;
            state.paciente = {
                id: persona.id,
                cttipoidentificacion_id: persona.cttipoidentificacion_id,
                identificacion: persona.identificacion,
                nombre: persona.nombre,
            };
            state.oid = oid;
            state.turno_id = turno_id;
        },

        addMedicamento: (state, action) => {
            const nuevoDetalle: IRecetaDetalle = {
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

export const { addCabecera,updateCabecera, addMedicamento, updateMedicamento, deleteMedicamento } = prescripcionMedicaActions.actions;
