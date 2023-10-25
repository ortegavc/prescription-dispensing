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
exports.client = void 0;
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
var constantes_1 = require("../helper/constantes");
var error_1 = require("@apollo/client/link/error");
var httpLink = (0, client_1.createHttpLink)({
    uri: constantes_1.Constantes.URLCONEXIONGRAPQL
});
var errorLink = (0, error_1.onError)(function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, response = _a.response;
    if (graphQLErrors) {
        graphQLErrors.map(function (_a) {
            var _b, _c, _d, _e, _f, _g;
            var message = _a.message, extensions = _a.extensions;
            if (((_b = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _b === void 0 ? void 0 : _b.statusCode) == 403) {
                localStorage.setItem('errorGraphql', "[GraphQL error]: Message: ".concat(message, ", Code: ").concat((_c = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _c === void 0 ? void 0 : _c.statusCode, ", Error: ").concat((_d = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _d === void 0 ? void 0 : _d.error));
            }
            else if (((_e = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _e === void 0 ? void 0 : _e.statusCode) == 500) {
            }
            else {
                throw Error("[GraphQL error]: Message: ".concat(message, ", Code: ").concat((_f = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _f === void 0 ? void 0 : _f.statusCode, ", Error: ").concat((_g = extensions === null || extensions === void 0 ? void 0 : extensions.response) === null || _g === void 0 ? void 0 : _g.error));
            }
        });
    }
    if (networkError) {
        throw Error("[Network error]: ".concat(networkError, " | Servicio GRAPHQL no disponible"));
    }
});
var appLink = (0, client_1.from)([
    errorLink, httpLink
]);
var authLink = (0, context_1.setContext)(function (_, _a) {
    var headers = _a.headers;
    var token = sessionStorage.getItem('keycloakTokenInv_terminal');
    return {
        headers: __assign(__assign({}, headers), { authorization: token ? "Bearer ".concat(token) : "" })
    };
});
exports.client = new client_1.ApolloClient({
    link: authLink.concat(appLink),
    cache: new client_1.InMemoryCache()
});
