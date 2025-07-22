import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753142612202 implements MigrationInterface {
    name = 'InitialMigration1753142612202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "preco_de_venda" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "preco_de_custo" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "preco_de_custo"`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "preco_de_venda"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "preco" numeric(10,2) NOT NULL`);
    }

}
