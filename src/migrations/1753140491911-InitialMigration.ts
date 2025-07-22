import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753140491911 implements MigrationInterface {
    name = 'InitialMigration1753140491911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        
        await queryRunner.query(`CREATE TABLE "Vendas" ("id" SERIAL NOT NULL, "quantidade" character varying NOT NULL, "produtoId" integer, CONSTRAINT "PK_f0e4f98e4ec41c14ba66ed29c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Vendas" ADD CONSTRAINT "FK_1cfb4d270f0ce3c7fa5387a4a59" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      
        await queryRunner.query(`DROP TABLE "Vendas"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
