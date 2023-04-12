import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Notificacao } from "./notificacao";

@Entity("CLIENTE")
export class Cliente{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: 'varchar'})
    nome: string;
  
    @Column({type: 'varchar'})
    email: string;

    @Column({type: 'varchar'})
    atributo_cliente: string;
  
    @Column({type: 'bigint'})
    telefone: string;
  
    @Column({type: 'date'})
    data_nascimento: Date;

    @Column({type: 'bool'})
    status: boolean

    @OneToMany(() => Notificacao, notificacao => notificacao.cliente)
    notificacao: Notificacao[]

}