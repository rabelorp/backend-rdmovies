import { MigrationInterface, QueryRunner } from 'typeorm';

export class Rdmovies1731323884698 implements MigrationInterface {
  name = 'Rdmovies1731323884698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" RENAME COLUMN "ratingCount" TO "ratingId"`,
    );
    await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "ratingId"`);
    await queryRunner.query(`ALTER TABLE "movies" ADD "ratingId" uuid`);
    await queryRunner.query(
      `CREATE INDEX "IDX_d29bdf46b99a4b135255d7724b" ON "movies" ("ratingId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "movies" ADD CONSTRAINT "FK_d29bdf46b99a4b135255d7724ba" FOREIGN KEY ("ratingId") REFERENCES "ratings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" DROP CONSTRAINT "FK_d29bdf46b99a4b135255d7724ba"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d29bdf46b99a4b135255d7724b"`,
    );
    await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "ratingId"`);
    await queryRunner.query(`ALTER TABLE "movies" ADD "ratingId" bigint`);
    await queryRunner.query(
      `ALTER TABLE "movies" RENAME COLUMN "ratingId" TO "ratingCount"`,
    );
  }
}
