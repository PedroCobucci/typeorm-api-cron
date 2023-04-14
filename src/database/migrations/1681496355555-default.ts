import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681496355555 implements MigrationInterface {
    name = 'default1681496355555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP COLUMN \`data_notificacao\``);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD \`data_vencimento\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD \`data_contato\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP COLUMN \`data_contato\``);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP COLUMN \`data_vencimento\``);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD \`data_notificacao\` varchar(255) NOT NULL`);
    }

}
