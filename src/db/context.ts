import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Role from '../models/Role';
import User from '../models/User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'e-commerce-api',
  synchronize: false,
  logging: false,
  entities: [Role, User],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

export default AppDataSource;