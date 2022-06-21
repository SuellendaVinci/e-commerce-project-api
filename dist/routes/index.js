"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const routes_roles_1 = __importDefault(require("./routes.roles"));
const routes_users_1 = __importDefault(require("./routes.users"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
// Todas as rotas da nossa aplicação
const routes = (0, express_1.Router)();
routes.use('/login', auth_routes_1.default);
routes.use('/roles', routes_roles_1.default);
routes.use('/users', routes_users_1.default);
exports.default = routes;
