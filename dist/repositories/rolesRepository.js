"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("../models/Role"));
const context_1 = __importDefault(require("../db/context"));
const RoleRepository = context_1.default.getRepository(Role_1.default).extend({});
exports.default = RoleRepository;
