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
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const coursesRepository_1 = __importDefault(require("../../repositories/coursesRepository"));
class DeleteUserCoursesUseCase {
    constructor() {
        this._userRepository = usersRepository_1.default;
        this._courseRepository = coursesRepository_1.default;
    }
    execute({ user_id, course_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._userRepository.find({
                where: { id: user_id },
                relations: { courses: true },
            });
            const foundCourse = yield this._courseRepository.find({
                where: { id: course_id },
            });
            if (foundCourse.length === 0) {
                return {
                    statusCode: 404,
                    data: {
                        message: `Curso não encontrado!`,
                    },
                };
            }
            const deletedCourse = user[0].courses.filter((course) => course.id === course_id)[0];
            if (!deletedCourse) {
                return {
                    statusCode: 404,
                    data: {
                        message: `O aluno ${user[0].name} não está cadastrado no curso ${foundCourse[0].course_name}`,
                    },
                };
            }
            user[0].courses = user[0].courses.filter((course) => course.id !== course_id);
            const response = yield this._userRepository
                .save(user[0])
                .then(() => {
                return {
                    statusCode: 201,
                    data: {
                        message: `Curso ${deletedCourse.course_name} deletado do usuário ${user[0].name}`,
                    },
                };
            })
                .catch((err) => {
                return { statusCode: 500, data: err };
            });
            return response;
        });
    }
}
exports.default = DeleteUserCoursesUseCase;
