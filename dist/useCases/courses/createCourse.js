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
const Course_1 = __importDefault(require("../../models/Course"));
const coursesRepository_1 = __importDefault(require("../../repositories/coursesRepository"));
class CreateCourseUseCase {
    constructor() {
        this._repository = coursesRepository_1.default;
    }
    execute({ course_name, teacher_name, description, duration, price, photo, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = new Course_1.default();
            course.course_name = course_name;
            course.teacher_name = teacher_name;
            course.description = description;
            course.duration = duration;
            course.price = price;
            course.photo = photo;
            const response = yield this._repository
                .save(course)
                .then(() => {
                return { statusCode: 201, data: course };
            })
                .catch((err) => {
                return { statusCode: 500, data: err };
            });
            return response;
        });
    }
}
exports.default = CreateCourseUseCase;
