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
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_config_1 = require("../../configs/auth.config");
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const errorMessage = 'Usuário e/ou senha inválido(s)';
class AuthUserUseCase {
    constructor() {
        this._repository = usersRepository_1.default;
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Buscar o usuário
            const user = yield this._repository
                .findOne({
                where: {
                    email,
                },
                relations: {
                    role: true,
                },
            })
                .then((resp) => {
                if (resp.password !== password) {
                    return { statusCode: 400, data: { errors: [errorMessage] } };
                }
                return { statusCode: 200, data: resp };
            });
            if (user.statusCode === 200) {
                // Gerar o JWT
                const jwt = (0, jsonwebtoken_1.sign)({ id: user.data.id, role: user.data.role }, auth_config_1.JwtAssignKey);
                delete user.data.password;
                const response = {
                    statusCode: user.statusCode,
                    data: { user: user.data, jwt },
                };
                return response;
            }
            return { statusCode: user.statusCode, data: user.data };
        });
    }
}
exports.default = AuthUserUseCase;
