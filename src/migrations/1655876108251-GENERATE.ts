import { MigrationInterface, QueryRunner } from "typeorm";

export class GENERATE1655876108251 implements MigrationInterface {
    name = 'GENERATE1655876108251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "course_name" character varying(100) NOT NULL, "price" integer NOT NULL, "duration" character varying(100) NOT NULL, "teacher_name" character varying(100) NOT NULL, "description" character varying(256), "photo" character varying(256), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "birthday_date" character varying(100) NOT NULL, "gender_identity" character varying(100) NOT NULL, "sexual_orientation" character varying(100) NOT NULL, "race" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(250) NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_users_users" ("coursesId" uuid NOT NULL, "usersId" uuid NOT NULL, CONSTRAINT "PK_c014d020ff83c9f163b3f32f504" PRIMARY KEY ("coursesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fcbccf87ca25a90b0fe66e29b9" ON "courses_users_users" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b9720e995db2c9c8d28e1cd1aa" ON "courses_users_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_users_users" ADD CONSTRAINT "FK_fcbccf87ca25a90b0fe66e29b9c" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "courses_users_users" ADD CONSTRAINT "FK_b9720e995db2c9c8d28e1cd1aab" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses_users_users" DROP CONSTRAINT "FK_b9720e995db2c9c8d28e1cd1aab"`);
        await queryRunner.query(`ALTER TABLE "courses_users_users" DROP CONSTRAINT "FK_fcbccf87ca25a90b0fe66e29b9c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b9720e995db2c9c8d28e1cd1aa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fcbccf87ca25a90b0fe66e29b9"`);
        await queryRunner.query(`DROP TABLE "courses_users_users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
