"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = __importDefault(require("../models/Course"));
const context_1 = __importDefault(require("../db/context"));
const CourseRepository = context_1.default.getRepository(Course_1.default).extend({});
exports.default = CourseRepository;
