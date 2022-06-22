"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const roles_routes_1 = __importDefault(require("./roles.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const courses_routes_1 = __importDefault(require("./courses.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
// Todas as rotas da nossa aplicação
const routes = (0, express_1.Router)();
routes.use('/login', auth_routes_1.default);
routes.use('/roles', roles_routes_1.default);
routes.use('/users', users_routes_1.default);
routes.use('/courses', courses_routes_1.default);
exports.default = routes;
