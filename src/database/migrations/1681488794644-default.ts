import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681488794644 implements MigrationInterface {
    name = 'default1681488794644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD \`mensagem\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP COLUMN \`mensagem\``);
    }

}
