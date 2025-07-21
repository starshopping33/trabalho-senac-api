import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753140190425 implements MigrationInterface {
    name = 'InitialMigration1753140190425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "preço"`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "descriçao"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "preco" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "descricao" character varying`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "criadoEm"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "criadoEm" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "atualizadoEm"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "atualizadoEm" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "atualizadoEm"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "criadoEm"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "criadoEm" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "produto" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "descriçao" character varying`);
        await queryRunner.query(`ALTER TABLE "produto" ADD "preço" numeric(10,2) NOT NULL`);
    }

}
