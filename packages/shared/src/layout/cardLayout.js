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
var react_router_dom_1 = require("react-router-dom");
(0, jsx_runtime_1.jsxs)("div", __assign({ className: "max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "text-lg font-semibold text-center text-blue-500 sm:text-xl" }, { children: "Me adapto a todo" }), void 0), (0, jsx_runtime_1.jsx)("p", __assign({ className: "mt-3 text-gray-600" }, { children: "Esta caja es adaptable. Dise\u00F1o primero para las dimensiones peque\u00F1as y voy aumentando para las grandes." }), void 0)] }), void 0);
var CardLayout = function (botones) {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-center justify-center mt-3 bg-blue-700 h-9 w-9 rounded-xl" }, { children: (0, jsx_runtime_1.jsx)("h1", __assign({ className: "absolute mx-auto text-2xl text-center text-white right" }, { children: botones.data.icon }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-7 border-b-1 h-28" }, { children: (0, jsx_runtime_1.jsx)("small", { children: botones.data.description }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex flex-wrap items-center w-auto border-t-2 rounded-b-xl " }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, __assign({ className: "w-auto p-1 px-2 m-2 text-blue-700 shadow-sm border-1 rounded-2xl", to: botones.data.link }, { children: botones.data.title }), void 0) }), void 0)] }), void 0));
};
exports["default"] = CardLayout;
