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
class RegisterUserCoursesUseCase {
    constructor() {
        this._userRepository = usersRepository_1.default;
        this._courseRepository = coursesRepository_1.default;
    }
    execute({ user_id, courses_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._userRepository.find({
                where: { id: user_id },
                relations: { courses: true },
            });
            const filterNotRegisteredUserCourses = (course_id) => !user[0].courses.find((course) => course_id === course.id);
            const formatCoursesId = (course_id) => ({ id: course_id });
            const formatedFilteredCoursesId = courses_id
                .filter(filterNotRegisteredUserCourses)
                .map(formatCoursesId);
            if (formatedFilteredCoursesId.length === 0) {
                return { statusCode: 201, data: user[0] };
            }
            const courses = yield this._courseRepository.find({
                where: formatedFilteredCoursesId,
            });
            user[0].courses = [...user[0].courses, ...courses];
            const response = yield this._userRepository
                .save(user)
                .then(() => {
                return { statusCode: 201, data: user[0] };
            })
                .catch((err) => {
                return { statusCode: 500, data: err };
            });
            return response;
        });
    }
}
exports.default = RegisterUserCoursesUseCase;
