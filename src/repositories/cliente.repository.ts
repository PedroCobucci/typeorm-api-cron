import { MysqlDataSource } from "../database/data-source";
import { Cliente } from "../entities/cliente";

export const ClienteRepository = MysqlDataSource.getRepository(Cliente)