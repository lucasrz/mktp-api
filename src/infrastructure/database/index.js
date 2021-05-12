import { createConnection } from 'typeorm';

let connection;
export async function connectDatabase() {
  try {
    connection = await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'rtkbekcq',
      password: 'lgF1GTzC43Chm9h8QUfAHSVPXEwPhl5F',
      database: 'rtkbekcq',
      synchronize: true,
      logging: false,
      entities: [
        require('../../data/entity/product'),
        require('../../data/entity/purchase'),
        require('../../data/entity/store'),
      ],
    });

    return connection;
  } catch (e) {
    throw new Error(e);
  }
}

export async function getRepository(repository) {
  try {
    if (!connection || !connection.isConnected) {
      connection = await connectDatabase();
    }
    return connection.getRepository(repository);
  } catch (e) {
    throw new Error(e);
  }
}
