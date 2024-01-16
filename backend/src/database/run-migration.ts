import { NestBackend1705399674934 } from 'src/migration/1705399674934-nest-backend';
import { dataSource } from './data-source';

async function runMigrations() {
  await dataSource.initialize();

  const migration = new NestBackend1705399674934();
  await migration.up(dataSource.createQueryRunner());
  console.log('Migrations have been run successfully.');
}

runMigrations().catch((error) => {
  console.error('Error during migrations', error);
});
