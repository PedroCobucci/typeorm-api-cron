import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681335247503 implements MigrationInterface {
    name = 'default1681335247503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` ADD \`status\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`CLIENTE\` ADD \`status\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`CLIENTE\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`NOTIFICACAO\` DROP COLUMN \`status\``);
    }

}
