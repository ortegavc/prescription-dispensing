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
var react_2 = require("@headlessui/react");
var SidebarContext_1 = require("./SidebarContext");
var eventDispatcher_1 = require("eventDispatcher");
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
function Navbar() {
    var toggleSidebar = (0, SidebarContext_1.useSidebar)().toggleSidebar;
    var _a = (0, react_1.useState)(), infoUser = _a[0], setInfoUser = _a[1];
    var eventDispatcher = (0, eventDispatcher_1.useEventDispatcher)();
    (0, react_1.useEffect)(function () {
        eventDispatcher.subscribe("infoUserClicked", function (data) {
            setInfoUser(data);
            console.log('000000--p', data);
        });
        //Quitamos el mensaje de error
        setTimeout(function () {
        }, 2000);
    });
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full px-2 sm:px-6 lg:px-8 bg-blue-600 top-0 fixed z-10" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative flex h-16 items-center justify-end" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "absolute inset-y-0 left-0 flex items-center sm:hidden" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ id: "menu-button", onClick: toggleSidebar }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fas fa-bars text-white text-lg" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-1 sm:items-center justify-center md:justify-center" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'flex mx-7' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'md:flex text-gray-100 md:items-center' }, { children: "Ministerio de Salud P\u00FAblica" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex flex-shrink-0 items-center px-3" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "h-8 w-auto", src: "http://dev-sni.msp.gob.ec/@msp/shared/1.0.0/20231bc1ffac3dcc134d.svg", alt: "Ministerio Salud Publica" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'md:flex text-gray-100 md:items-center' }, { children: "Rep\u00FAblica del Ecuador" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { className: 'w-7' }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-7 sm:ml-6 sm:block text-white" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex space-x-3" }, { children: [infoUser === null || infoUser === void 0 ? void 0 : infoUser.nombre, "  ", infoUser === null || infoUser === void 0 ? void 0 : infoUser.bodega, "  ", infoUser === null || infoUser === void 0 ? void 0 : infoUser.nombreTerminal, "  ", infoUser === null || infoUser === void 0 ? void 0 : infoUser.numeroturno] }), void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" }, { children: (0, jsx_runtime_1.jsxs)(react_2.Menu, __assign({ as: "div", className: "relative ml-3" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_2.Menu.Button, __assign({ className: "relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute -inset-1.5" }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Open user menu" }), void 0), (0, jsx_runtime_1.jsx)("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "#ffffff", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-7 h-7" }, { children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" }, void 0) }), void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_2.Transition, __assign({ as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: (0, jsx_runtime_1.jsxs)(react_2.Menu.Items, __assign({ className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Menu.Item, { children: function (_a) {
                                                var active = _a.active;
                                                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "#", className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: "Editar perfil" }), void 0));
                                            } }, void 0), (0, jsx_runtime_1.jsx)(react_2.Menu.Item, { children: function (_a) {
                                                var active = _a.active;
                                                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "#", className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: "Configurar" }), void 0));
                                            } }, void 0), (0, jsx_runtime_1.jsx)(react_2.Menu.Item, { children: function (_a) {
                                                var active = _a.active;
                                                return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "#", className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: "Salir" }), void 0));
                                            } }, void 0)] }), void 0) }), void 0)] }), void 0) }), void 0)] }), void 0) }), void 0));
}
exports["default"] = Navbar;
