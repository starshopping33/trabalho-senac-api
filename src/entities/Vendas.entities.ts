import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ("Vendas")

export class Vendas{
    @PrimaryGeneratedColumn("increment")
    
    id:string

    @Column()

    quantidade:string

    @Column()

    

    
}