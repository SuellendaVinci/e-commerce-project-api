"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../useCases/users/createUser"));
const registerUserCourses_1 = __importDefault(require("../useCases/users/registerUserCourses"));
const getUser_1 = __importDefault(require("../useCases/users/getUser"));
// Todas as rotas de Users
const usersRoutes = (0, express_1.Router)();
// Cadastro
usersRoutes.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new createUser_1.default();
    const user = yield useCase.execute(request.body);
    const { statusCode, data } = user;
    return response.status(statusCode).send(data);
}));
// Cadastrar cursos do aluno
usersRoutes.post('/courses', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new registerUserCourses_1.default();
    const user = yield useCase.execute(request.body);
    const { statusCode, data } = user;
    return response.status(statusCode).send(data);
}));
// Pesquisa
usersRoutes.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const useCase = new getUser_1.default();
    const user = yield useCase.execute({ id });
    const { statusCode, data } = user;
    return response.status(statusCode).send(data);
}));
exports.default = usersRoutes;
