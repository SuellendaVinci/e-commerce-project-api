"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const context_1 = __importDefault(require("./db/context"));
const Role_1 = __importDefault(require("./models/Role"));
function runServer() {
    const server = (0, express_1.default)();
    server.use((0, cors_1.default)());
    server.use(express_1.default.json());
    server.use(routes_1.default);
    const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3333;
    server.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}
// SEED
context_1.default.initialize()
    .then((context) => {
    const adminRole = new Role_1.default();
    adminRole.id = '5be3f402-0c14-4ece-90a1-121bebae2a00';
    adminRole.name = 'Administrator';
    context.manager.save(adminRole);
    runServer();
})
    .catch((err) => {
    console.log(err);
    console.log('Server stopped!');
});
