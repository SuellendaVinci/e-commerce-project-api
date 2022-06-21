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
const User_1 = __importDefault(require("../../models/User"));
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
class CreateUserUseCase {
    constructor() {
        this._repository = usersRepository_1.default;
    }
    execute({ name, last_name, gender_identity, sexual_orientation, race, birthday_date, email, password, role_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default();
            user.name = name;
            user.last_name = last_name;
            user.gender_identity = gender_identity;
            user.sexual_orientation = sexual_orientation;
            user.race = race;
            user.birthday_date = birthday_date;
            user.email = email;
            user.password = password;
            user.role_id = role_id;
            const response = yield this._repository
                .save(user)
                .then(() => {
                return { statusCode: 201, data: user };
            })
                .catch((err) => {
                return { statusCode: 500, data: err };
            });
            return response;
        });
    }
}
exports.default = CreateUserUseCase;
