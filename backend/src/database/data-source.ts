import { config } from 'dotenv';
import { Board } from 'src/boards/entities/boards.entity';
import { Mig1707118760019 } from 'src/database/migration/1707118760019-mig';
import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';

config({
  path: __dirname + '/../../.env',
});

const migrations = [Mig1707118760019];

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  entities: [User, Board],
  database: process.env.DB_DATABASE,
  logging: true,
  migrations,
});
