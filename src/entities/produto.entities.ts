import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("produto")
export class produto {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column({type:"int"})
    preco_de_venda:number;

    @Column({type:"int"})
    preco_de_custo:number;

    @Column({nullable: true })
    descricao: string;

      @Column({default: true })
      ativo: boolean;

     @CreateDateColumn({type:"date"})
     criadoEm: string;

     @UpdateDateColumn({type:"date"})
     atualizadoEm: string;
}