"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.useEventDispatcher = exports.sharedService = exports.graphql = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./global.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var layout_1 = require("layout");
var keycloak_js_1 = require("keycloak-js");
var web_1 = require("@react-keycloak/web");
var client_1 = require("@apollo/client");
var client_2 = require("@codegen/client");
var configDev = require("@config/config.local");
var configProd = require("@config/config.prod");
var graphql = require("@graphql/__generated__/graphql-types");
exports.graphql = graphql;
var Layout = function (_a) {
    var children = _a.children;
    var isDevelopment = process.env.NODE_ENV === 'development';
    var config = isDevelopment ? configDev : configProd;
    //Configuramos keycloak
    var keycloak = new keycloak_js_1["default"]({
        url: config.Constantes.URLKEYCLOACK,
        realm: config.Constantes.REALMKEYCLOACK,
        clientId: config.Constantes.CLIENTCLOACK
    });
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(web_1.ReactKeycloakProvider, __assign({ initOptions: { onLoad: 'login-required', checkLoginIframe: false, silentCheckSsoRedirectUri: "".concat(window.location.origin, "/silent") }, authClient: keycloak, onTokens: function (token) { (0, layout_1.onTokens)(token, keycloak); }, onEvent: function (event) { return (0, layout_1.onEvent)(event); } }, { children: (0, jsx_runtime_1.jsx)(client_1.ApolloProvider, __assign({ client: client_2.client }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, __assign({ element: (0, jsx_runtime_1.jsx)(layout_1.Main, {}, void 0) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(layout_1.RequireAuth, { children: children }, void 0) }, void 0) }), void 0) }, void 0) }, void 0) }), void 0) }), void 0) }, void 0) }, void 0));
};
exports["default"] = Layout;
exports.sharedService = require("@services/sharedServices");
var EventDispatcherContext_1 = require("@eventDispatcher/EventDispatcherContext");
__createBinding(exports, EventDispatcherContext_1, "useEventDispatcher");
