import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity("NOTIFICACAO")
export class Notificacao{

    @PrimaryGeneratedColumn()
    id: Number;
  
    @Column({type: 'varchar'})
    descricao_notificacao: string;
  
    @Column({type: 'date'})
    data_vencimento: Date;
  
    @Column({type: 'varchar'})
    atributo_notificacao: string

    @Column({type: 'varchar', length: 15})
    status: string

    @Column({type: 'date', nullable: true})
    data_contato: Date

    @Column({type: 'varchar'})
    mensagem: string

    @ManyToOne(() => Cliente, cliente => cliente.notificacoes,{onDelete: 'CASCADE'})
    @JoinColumn()
    cliente: Cliente

}