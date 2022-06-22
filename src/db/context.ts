import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Role from '../models/Role';
import User from '../models/User';
import Course from '../models/Course';
import { herokuDBData } from '../utils/getHerokuDBData';

// postgres://{user}:{password}@{hostname}:{port}/{database-name}
const DATABASE_URL_LOCAL =
  'postgres://postgres:postgres@localhost:5432/e-commerce-api';

const dbObject = herokuDBData(
  process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : DATABASE_URL_LOCAL,
);

const { host, port, username, password, database } = dbObject;

const AppDataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize: false,
  logging: false,
  entities: [Role, User, Course],
  subscribers: [],
  migrations: ['./dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  ssl: { rejectUnauthorized: false },
});

export default AppDataSource;
