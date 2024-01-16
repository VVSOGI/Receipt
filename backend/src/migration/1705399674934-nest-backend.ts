import { MigrationInterface, QueryRunner } from "typeorm";

export class NestBackend1705399674934 implements MigrationInterface {
    name = 'NestBackend1705399674934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" DROP CONSTRAINT "board_pkey"`);
        await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "board" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ADD CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "board" DROP CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1"`);
        await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "board" ADD "id" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ADD CONSTRAINT "board_pkey" PRIMARY KEY ("id")`);
    }

}
