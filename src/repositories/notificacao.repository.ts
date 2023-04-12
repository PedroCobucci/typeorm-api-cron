import { MysqlDataSource } from "../database/data-source";
import { Notificacao } from "../entities/notificacao";

export const NotificacaoRepository = MysqlDataSource.getRepository(Notificacao)