import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681332450763 implements MigrationInterface {
    name = 'default1681332450763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`NOTIFICACAO\` (\`id\` int NOT NULL AUTO_INCREMENT, \`descricao_notificacao\` varchar(255) NOT NULL, \`data_notificacao\` varchar(255) NOT NULL, \`atributo_notificacao\` varchar(255) NOT NULL, \`clienteId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CLIENTE\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`atributo_cliente\` varchar(255) NOT NULL, \`telefone\` bigint NOT NULL, \`data_nascimento\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD CONSTRAINT \`FK_27da9275df239504c6dfdddacbd\` FOREIGN KEY (\`clienteId\`) REFERENCES \`CLIENTE\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP FOREIGN KEY \`FK_27da9275df239504c6dfdddacbd\``);
        await queryRunner.query(`DROP TABLE \`CLIENTE\``);
        await queryRunner.query(`DROP TABLE \`NOTIFICACAO\``);
    }

}
