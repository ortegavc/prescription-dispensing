"use strict";
exports.__esModule = true;
exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var requireAuth_1 = require("./requireAuth");
var navbar_1 = require("./navbar");
var slider_1 = require("./slider");
var content_1 = require("./content");
var footer_1 = require("./footer");
var SidebarContext_1 = require("./SidebarContext");
var Main = function () {
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(SidebarContext_1.SidebarProvider, { children: (0, jsx_runtime_1.jsxs)(requireAuth_1["default"], { children: [(0, jsx_runtime_1.jsx)(navbar_1["default"], {}, void 0), (0, jsx_runtime_1.jsxs)(content_1.CenterMain, { children: [(0, jsx_runtime_1.jsx)(slider_1["default"], {}, void 0), (0, jsx_runtime_1.jsx)(content_1["default"], { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(footer_1["default"], {}, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
};
exports.Main = Main;
