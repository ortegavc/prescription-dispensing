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
var SidebarContext_1 = require("./SidebarContext");
var react_router_dom_1 = require("react-router-dom");
var configDev = require("@config/config.local");
var configProd = require("@config/config.prod");
var web_1 = require("@react-keycloak/web");
function Sidebar() {
    var expanded = (0, SidebarContext_1.useSidebar)().expanded;
    var isDevelopment = process.env.NODE_ENV === 'development';
    var config = isDevelopment ? configDev : configProd;
    var keycloak = (0, web_1.useKeycloak)().keycloak;
    var sidebarWidth = expanded ? 400 : 20;
    var sidebayOpacity = expanded ? 100 : 0;
    var handleLogout = function () {
        keycloak.logout({ redirectUri: config.Constantes.URLHOME });
    };
    var navigation = [
        { name: 'Inicio', to: '/terminal', icon: 'fa-solid fa-house', current: true },
        { name: 'Despachar', to: '/terminal/usuario', icon: 'fa-solid fa-cart-plus', current: false },
        { name: 'Despachos', to: '/terminal/despachos', icon: 'fa-solid fa-dolly', current: false },
        { name: 'Reportes', to: '/terminal/reportes', icon: 'fa-solid fa-file-pdf', current: false },
        { name: 'Salir', to: '#', icon: 'fa-solid fa-right-from-bracket', current: false },
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: "sidebar", className: "w-".concat(sidebarWidth, " bg-gray-200 h-screen fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden") }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-2 space-y-4 " }, { children: navigation.map(function (item, i) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: item.name !== 'Salir' ? ((0, jsx_runtime_1.jsx)("li", __assign({ className: "relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-800 rounded-lg group gap-3" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, __assign({ to: item.to }, { children: [(0, jsx_runtime_1.jsx)("i", { className: item.icon }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "font-normal text-sm px-3 transition-all duration-200 opacity-".concat(sidebayOpacity) }, { children: item.name }), void 0)] }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)("li", __assign({ className: "relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-600 rounded-lg group gap-3" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, __assign({ to: "#", onClick: handleLogout }, { children: [(0, jsx_runtime_1.jsx)("i", { className: item.icon }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "font-normal text-sm px-3 transition-all duration-200 opacity-".concat(sidebayOpacity) }, { children: item.name }), void 0)] }), void 0) }), void 0)) }, i)); }) }), void 0) }), void 0));
}
exports["default"] = Sidebar;
