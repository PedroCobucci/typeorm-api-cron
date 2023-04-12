import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity("NOTIFICACAO")
export class Notificacao{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar'})
    descricao_notificacao: string;
  
    @Column({type: 'varchar'})
    data_notificacao: string;
  
    @Column({type: 'varchar'})
    atributo_notificacao: string

    @Column({type: 'varchar', length: 15})
    status: string

    @ManyToOne(() => Cliente, cliente => cliente.notificacao,{onDelete: 'CASCADE'})
    @JoinColumn()
    cliente: Cliente

}