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
var ri_1 = require("react-icons/ri");
var react_2 = require("react");
function Header() {
    var _a = (0, web_1.useKeycloak)(), keycloak = _a.keycloak, initialized = _a.initialized;
    var _b = (0, react_2.useState)(false), isNavOpen = _b[0], setIsNavOpen = _b[1];
    var _c = (0, react_2.useState)(false), isMenuOpen = _c[0], setIsMenuOpen = _c[1];
    var toggleIsNavOpen = function () { return setIsNavOpen(function (cur) { return !cur; }); };
    var rolActual = sessionStorage.getItem("rolActual");
    var triggers = {
        onMouseEnter: function () { return setIsMenuOpen(true); },
        onMouseLeave: function () { return setIsMenuOpen(false); }
    };
    (0, react_2.useEffect)(function () {
        window.addEventListener("resize", function () { return window.innerWidth >= 960 && setIsNavOpen(false); });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: keycloak.authenticated && ((0, jsx_runtime_1.jsxs)("button", __assign({ color: "white", className: "boton", onClick: function () { keycloak.logout(); } }, { children: [(0, jsx_runtime_1.jsx)(ri_1.RiShutDownLine, { className: "h-5 w-5" }, void 0), "Salir"] }), void 0)) }, void 0));
}
exports["default"] = Header;
