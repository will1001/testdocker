import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabases1642993952218 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('rent_car', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('rent_car', true);
  }
}
