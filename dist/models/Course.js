"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
let Course = class Course {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Course.prototype, "course_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Course.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Course.prototype, "teacher_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 256,
        nullable: true,
    }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 256,
        nullable: true,
    }),
    __metadata("design:type", String)
], Course.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.default, (user) => user.courses),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Course.prototype, "users", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)('courses')
], Course);
exports.default = Course;
