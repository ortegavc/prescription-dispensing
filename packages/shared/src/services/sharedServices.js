"use strict";
exports.__esModule = true;
exports.onTokens = exports.onEventkeycloak = exports.tipoRegistro = exports.valuesView = exports.statusView = exports.btnSegurity = exports.fechaActual = exports.fechaZonaService = void 0;
var date_fns_tz_1 = require("date-fns-tz");
var fechaZonaService = function (fecha) {
    var fechaSalida = (0, date_fns_tz_1.zonedTimeToUtc)(fecha, 'America/Guayaquil');
    return fechaSalida;
};
exports.fechaZonaService = fechaZonaService;
var fechaActual = function () {
    var tiempoTranscurrido = Date.now();
    var fecha = new Date(tiempoTranscurrido).toLocaleDateString('es', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    return fecha;
};
exports.fechaActual = fechaActual;
;
var btnSegurity = function (opt) {
    var permisosBotones = opt;
    return permisosBotones;
};
exports.btnSegurity = btnSegurity;
;
;
var statusView = function () {
    var estados = [
        { valor: 1, color: 'indigo', mensaje: 'Activo' }, { valor: 0, color: 'rose', mensaje: 'Inactivo' },
    ];
    return estados;
};
exports.statusView = statusView;
var valuesView = function () {
    var valores = [
        { valor: 1, mensaje: 'Sí' }, { valor: 0, mensaje: 'No' },
    ];
    return valores;
};
exports.valuesView = valuesView;
var tipoRegistro = function (opt) {
    var mensaje;
    switch (opt) {
        case 'E':
            mensaje = { etiqueta: 'Editado', label: 'Editar' };
            break;
        case 'V':
            mensaje = { etiqueta: null, label: null };
            break;
        case 'D':
            mensaje = { etiqueta: 'Borrado', label: 'Eliminar' };
            break;
        default:
            mensaje = { etiqueta: 'Creado', label: 'Crear' };
            break;
    }
    return mensaje;
};
exports.tipoRegistro = tipoRegistro;
var onEventkeycloak = function (event, error) {
    if (error) {
        throw Error("[Network error]: ".concat(error, " | Servicio no disponible"));
    }
    if (event && event === 'onAuthError') {
        throw Error("[kEYCLOAK error]: ".concat(event, " | Servicio no disponible, por favor revise la configuraci\u00F3n del kEYCLOAK"));
    }
};
exports.onEventkeycloak = onEventkeycloak;
var onTokens = function (token, keycloak) {
    var _a;
    if (((_a = keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed) === null || _a === void 0 ? void 0 : _a.sub) !== 'undefined') {
        localStorage.setItem("keycloakTokenInv", token === null || token === void 0 ? void 0 : token.token);
    }
};
exports.onTokens = onTokens;
