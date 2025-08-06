import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("financeiro")
export class financeiro {
    @PrimaryGeneratedColumn("increment")
    id: number

     @Column({nullable: true })
    descricao: string;

    @Column()
    valor:Number
    

     
}