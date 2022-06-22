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
const createCourse_1 = __importDefault(require("../useCases/courses/createCourse"));
const listCourses_1 = __importDefault(require("../useCases/courses/listCourses"));
// Todas as rotas de Courses
const coursesRoutes = (0, express_1.Router)();
// Cadastro
coursesRoutes.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new createCourse_1.default();
    const course = yield useCase.execute(request.body);
    const { statusCode, data } = course;
    return response.status(statusCode).send(data);
}));
// Listagem
coursesRoutes.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new listCourses_1.default();
    const courses = yield useCase.execute();
    return response.send(courses);
}));
exports.default = coursesRoutes;
