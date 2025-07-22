import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { produto } from "./produto.entities";

@Entity ("Vendas")

export class Vendas{
    @PrimaryGeneratedColumn("increment")
    
    id:string

    @Column()

    quantidade:string

    @ManyToOne(()=>produto)
    produto: produto

    @Column({type:"int"})
    veda_total:number

    @Column({type:"int"})
    lucro:number



    
}