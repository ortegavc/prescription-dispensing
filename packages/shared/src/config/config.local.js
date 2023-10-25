"use strict";
exports.__esModule = true;
exports.Constantes = void 0;
var Constantes = /** @class */ (function () {
    function Constantes() {
    }
    /**
       * Url para la conexión con api-gateway
       */
    Constantes.URLCONEXIONGRAPQL = "http://10.64.103.116:3002/graphql";
    /**
     * Url para la conexión con key-cloack
     */
    Constantes.URLKEYCLOACK = "https://dev-sso.msp.gob.ec/";
    /**
     * realm key-cloack
     */
    Constantes.REALMKEYCLOACK = "msp-nacional";
    Constantes.CLIENTCLOACK = "local-app-inventarios-terminal";
    Constantes.URLHOME = "http://localhost:9000/terminal";
    Constantes.CLIENTINVENTARIO = "api-inventarios";
    return Constantes;
}());
exports.Constantes = Constantes;
