import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753139031258 implements MigrationInterface {
    name = 'InitialMigration1753139031258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "preço" numeric(10,2) NOT NULL, "descriçao" character varying, "ativo" boolean NOT NULL DEFAULT true, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
