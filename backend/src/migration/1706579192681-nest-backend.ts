import { MigrationInterface, QueryRunner } from 'typeorm';

export class NestBackend1706579192681 implements MigrationInterface {
  name = 'NestBackend1706579192681';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "board" ADD "commitUrl" character varying(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "commitUrl"`);
  }
}
