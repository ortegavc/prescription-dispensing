"use strict";
exports.__esModule = true;
exports.onEvent = exports.onTokens = void 0;
var onTokens = function (token, keycloak) {
    if (keycloak.authenticated) {
        if ("api-inventarios" in keycloak.resourceAccess) {
            var apiInventarios = keycloak.resourceAccess["api-inventarios"];
            var roles = apiInventarios["roles"];
            if (Array.isArray(roles) && roles.length > 10) {
                console.log("ppp", roles);
            }
            else {
                sessionStorage.setItem("rol_seleccionado", roles[0].replace(/-/g, " "));
            }
        }
        else {
            console.log(false);
        }
        if ((keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed.sub) !== "undefined") {
            sessionStorage.setItem("keycloakTokenInv_terminal", token.token);
            sessionStorage.setItem("usuarioId_terminal", keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed.sub);
            sessionStorage.setItem("usuarioNombre_terminal", keycloak === null || keycloak === void 0 ? void 0 : keycloak.tokenParsed.name);
        }
    }
    else {
        sessionStorage.clear();
        keycloak.login();
    }
};
exports.onTokens = onTokens;
var onEvent = function (event) {
    console.log("Implementar alguna funcionalidad...", event);
};
exports.onEvent = onEvent;
