import { DataSource } from "typeorm"
import { Cliente } from "../entities/cliente"
import { Notificacao } from "../entities/notificacao"
import { default1681332450763 } from "./migrations/1681332450763-default"
import { default1681335247503 } from "./migrations/1681335247503-default"

export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "nucleovet.c5go8t0hkkfk.sa-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "admin123",
    database: "NucleovetProject",
    entities: [
        `${__dirname}/../entities/*.ts`,
        Cliente,
        Notificacao
    ],
    migrations:[
        `${__dirname}/migrations/*.ts`,
        default1681335247503
    ]
})