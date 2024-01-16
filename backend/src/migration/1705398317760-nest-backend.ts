import { MigrationInterface, QueryRunner } from 'typeorm';

export class NestBackend1705398317760 implements MigrationInterface {
  name = 'NestBackend1705398317760';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "board" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "board" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "board" DROP COLUMN "createdAt"`);
  }
}
