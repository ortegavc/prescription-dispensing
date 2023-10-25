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
var react_router_dom_1 = require("react-router-dom");
function Footer() {
    return ((0, jsx_runtime_1.jsxs)("footer", __assign({ className: "flex w-full flex-row flex-wrap items-center p-4 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-white" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ color: "blue-gray", className: "font-normal text-sm" }, { children: "\u00A9 2023 Gobierno de la Republica del Ecuador" }), void 0), (0, jsx_runtime_1.jsxs)("ul", __assign({ className: "flex flex-wrap items-center gap-y-2 gap-x-8" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "#", color: "blue-gray", className: "text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500" }, { children: "Soporte T\u00E9cnico" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "#", color: "blue-gray", className: "text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500" }, { children: "Politica de privacidad" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "#", color: "blue-gray", className: "text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500" }, { children: "Licenciamiento" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "#", color: "blue-gray", className: "text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500" }, { children: "Contacto" }), void 0) }, void 0)] }), void 0)] }), void 0));
}
exports["default"] = Footer;
