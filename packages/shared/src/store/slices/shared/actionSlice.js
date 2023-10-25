"use strict";
var _a;
exports.__esModule = true;
exports.setMensajes = exports.setViewModal = exports.setDataEntidad = exports.setNavegacion = exports.setEtiqueta = exports.setDataUser = exports.setEjercicio = exports.setAction = exports.resetAction = exports.actionSlice = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
exports.initialState = {
    notificacion: false,
    periodo: false,
    menu: false,
    bodegas: false,
    ejercicioLocal: new Date().getFullYear(),
    prdoLocal: new Date().getMonth(),
    periodoLocal: ((new Date().getMonth()) + 1),
    mesLocal: monthNames[new Date().getMonth()],
    dataUser: {
        data: {},
        status: false
    },
    etiquetas: {
        mensaje: '',
        atributo: false,
        tipo: '',
        icon: ''
    },
    navegacion: {
        open: false
    },
    dataEntidad: {
        unicodigo: null,
        nombreEntidad: '',
        open: false,
        data: [],
        title: '',
        mensaje: ''
    },
    mensajes: {
        label: '',
        tipo: ''
    },
    viewModal: {
        open: false
    }
};
exports.actionSlice = (0, toolkit_1.createSlice)({
    name: 'action',
    initialState: exports.initialState,
    reducers: {
        resetAction: function (state) {
            state.notificacion = false;
            state.periodo = false;
            state.menu = false;
            state.etiquetas.mensaje = '';
            state.etiquetas.atributo = false;
            state.etiquetas.tipo = '';
            state.etiquetas.icon = '';
            state.navegacion.open = false;
            state.dataEntidad.nombreEntidad = '';
            state.dataEntidad.unicodigo = null;
            state.mensajes.label = null;
            state.mensajes.tipo = null;
            state.viewModal.open = false;
        },
        setAction: function (state, action) {
            state.notificacion = (action.payload.notificacion) ? action.payload.notificacion : false;
            state.periodo = (action.payload.periodo) ? action.payload.periodo : false;
            state.menu = (action.payload.bodegas) ? action.payload.menu : false;
            state.bodegas = (action.payload.bodegas) ? action.payload.bodegas : false;
        },
        setEjercicio: function (state, action) {
            state.ejercicioLocal = action.payload.ejercicio;
            state.prdoLocal = action.payload.prdo;
            state.periodoLocal = action.payload.periodo;
            state.mesLocal = action.payload.mes;
        },
        setDataUser: function (state, action) {
            state.dataUser.data = action.payload.data;
            state.dataUser.status = action.payload.status;
        },
        setEtiqueta: function (state, action) {
            state.etiquetas.mensaje = action.payload.mensaje;
            state.etiquetas.atributo = action.payload.atributo;
            state.etiquetas.tipo = action.payload.tipo;
            state.etiquetas.icon = action.payload.icon;
        },
        setNavegacion: function (state, action) {
            state.navegacion.open = action.payload.open;
        },
        setDataEntidad: function (state, action) {
            state.dataEntidad.nombreEntidad = action.payload.nombreEntidad;
            state.dataEntidad.unicodigo = action.payload.unicodigo;
            state.dataEntidad.open = action.payload.open;
            state.dataEntidad.data = action.payload.data;
            state.dataEntidad.title = action.payload.title;
            state.dataEntidad.mensaje = action.payload.mensaje;
        },
        setViewModal: function (state, action) {
            state.viewModal.open = (action.payload.open) ? action.payload.open : false;
        },
        setMensajes: function (state, action) {
            state.mensajes.label = (action.payload.label) ? action.payload.label : null;
            state.mensajes.tipo = (action.payload.tipo) ? action.payload.tipo : null;
        }
    }
});
exports.resetAction = (_a = exports.actionSlice.actions, _a.resetAction), exports.setAction = _a.setAction, exports.setEjercicio = _a.setEjercicio, exports.setDataUser = _a.setDataUser, exports.setEtiqueta = _a.setEtiqueta, exports.setNavegacion = _a.setNavegacion, exports.setDataEntidad = _a.setDataEntidad, exports.setViewModal = _a.setViewModal, exports.setMensajes = _a.setMensajes;
