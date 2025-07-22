import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753142774438 implements MigrationInterface {
    name = 'InitialMigration1753142774438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Vendas" ADD "veda_total" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Vendas" ADD "lucro" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Vendas" DROP COLUMN "lucro"`);
        await queryRunner.query(`ALTER TABLE "Vendas" DROP COLUMN "veda_total"`);
    }

}
