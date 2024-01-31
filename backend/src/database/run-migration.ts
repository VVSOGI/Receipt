import { NestBackend1706579192681 } from 'src/migration/1706579192681-nest-backend';
import { dataSource } from './data-source';

async function runMigrations() {
  await dataSource.initialize();

  const migration = new NestBackend1706579192681();
  await migration.up(dataSource.createQueryRunner());
  console.log('Migrations have been run successfully.');
}

runMigrations().catch((error) => {
  console.error('Error during migrations', error);
});
