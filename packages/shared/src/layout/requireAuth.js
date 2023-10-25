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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var web_1 = require("@react-keycloak/web");
var loader_1 = require("@widgets/loader");
var RequireAuth = function (_a) {
    var children = _a.children;
    var keycloak = (0, web_1.useKeycloak)().keycloak;
    var isLoggedIn = keycloak.authenticated;
    return isLoggedIn ? (0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-white" }, { children: children }), void 0) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(NoAcceso, {}, void 0) }, void 0);
};
function NoAcceso() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "min-h-screen flex flex-col items-center justify-center" }, { children: [(0, jsx_runtime_1.jsx)(loader_1["default"], {}, void 0), "Esperar ...", (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-3xl font-semibold m-4 text-red-500" }, { children: "Existe un problema al Ingresar" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-lg text-gray-600" }, { children: "Lo sentimos, hay un problema al ingresar al sistema. Por favor, revisa tu conexi\u00F3n a Internet o aseg\u00FArate de estar registrado como usuario autorizado." }), void 0)] }), void 0));
}
exports["default"] = RequireAuth;
