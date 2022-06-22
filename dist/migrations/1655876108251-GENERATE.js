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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE1655876108251 = void 0;
class GENERATE1655876108251 {
    constructor() {
        this.name = 'GENERATE1655876108251';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "course_name" character varying(100) NOT NULL, "price" integer NOT NULL, "duration" character varying(100) NOT NULL, "teacher_name" character varying(100) NOT NULL, "description" character varying(256), "photo" character varying(256), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "birthday_date" character varying(100) NOT NULL, "gender_identity" character varying(100) NOT NULL, "sexual_orientation" character varying(100) NOT NULL, "race" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(250) NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "courses_users_users" ("coursesId" uuid NOT NULL, "usersId" uuid NOT NULL, CONSTRAINT "PK_c014d020ff83c9f163b3f32f504" PRIMARY KEY ("coursesId", "usersId"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_fcbccf87ca25a90b0fe66e29b9" ON "courses_users_users" ("coursesId") `);
            yield queryRunner.query(`CREATE INDEX "IDX_b9720e995db2c9c8d28e1cd1aa" ON "courses_users_users" ("usersId") `);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "courses_users_users" ADD CONSTRAINT "FK_fcbccf87ca25a90b0fe66e29b9c" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "courses_users_users" ADD CONSTRAINT "FK_b9720e995db2c9c8d28e1cd1aab" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "courses_users_users" DROP CONSTRAINT "FK_b9720e995db2c9c8d28e1cd1aab"`);
            yield queryRunner.query(`ALTER TABLE "courses_users_users" DROP CONSTRAINT "FK_fcbccf87ca25a90b0fe66e29b9c"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_b9720e995db2c9c8d28e1cd1aa"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_fcbccf87ca25a90b0fe66e29b9"`);
            yield queryRunner.query(`DROP TABLE "courses_users_users"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "courses"`);
            yield queryRunner.query(`DROP TABLE "roles"`);
        });
    }
}
exports.GENERATE1655876108251 = GENERATE1655876108251;
