import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("produto")
export class produto {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column("decimal",{precision:10, scale:2})
    preco:number;


    @Column({nullable: true })
    descricao: string;

      @Column({default: true })
      ativo: boolean;

     @CreateDateColumn({type:"date"})
     criadoEm: string;

     @UpdateDateColumn({type:"date"})
     atualizadoEm: string;
}