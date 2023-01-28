import { DataSource, DataSourceOptions } from 'typeorm';
import { getConfig } from '../../utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const databaseType: DataSourceOptions['type'] = 'mysql';
const { MYSQL_CONFIG } = getConfig();
const my = {
  ...MYSQL_CONFIG,
  type: databaseType,
  entities: [path.join(__dirname, `../../**/**/*.entity{.ts,.js}`)],
  // entities: [
  //   path.join(
  //     __dirname,
  //     `../../**/**/*.${MYSQL_CONFIG.entities}.entity{.ts,.js}`,
  //   ),
  // ],
};
const myDatabase = new DataSource(my);

export const DatabaseProviders = [
  {
    provide: 'myDatabase',
    useFactory: async () => {
      await myDatabase.initialize();
      return myDatabase;
    },
  },
];
