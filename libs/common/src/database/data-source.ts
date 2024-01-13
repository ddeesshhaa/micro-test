import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  host: 'localhost',
  type: 'mysql',
  port: 3306,
  username: 'root',
  password: 'toor',
  database: 'micro',
  entities: [__dirname + './../**/*.entity{.ts,.js}'],
  migrations: [__dirname + './migrations/**/*{.ts,.js}'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
