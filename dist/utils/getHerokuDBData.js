"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.herokuDBData = void 0;
const herokuDBData = (dbString) => {
    const type = dbString.split(':')[0];
    const username = dbString.split(':')[1].split('//')[1];
    const password = dbString.split(':')[2].split('@')[0];
    const host = dbString.split(':')[2].split('@')[1];
    const port = Number(dbString.split(':')[3].split('/')[0]);
    const database = dbString.split('/')[3];
    const dbObj = { type, username, password, host, port, database };
    return dbObj;
};
exports.herokuDBData = herokuDBData;
