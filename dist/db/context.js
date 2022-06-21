"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Role_1 = __importDefault(require("../models/Role"));
const User_1 = __importDefault(require("../models/User"));
const getHerokuDBData_1 = require("../utils/getHerokuDBData");
// postgres://{user}:{password}@{hostname}:{port}/{database-name}
const DATABASE_URL_LOCAL = 'postgres://postgres:postgres@localhost:5432/e-commerce-api';
const dbObject = (0, getHerokuDBData_1.herokuDBData)(process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : DATABASE_URL_LOCAL);
const { host, port, username, password, database } = dbObject;
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host,
    port,
    username,
    password,
    database,
    synchronize: false,
    logging: false,
    entities: [Role_1.default, User_1.default],
    subscribers: [],
    migrations: ['./dist/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
});
exports.default = AppDataSource;
