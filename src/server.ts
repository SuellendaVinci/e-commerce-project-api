import express from 'express';
import cors from 'cors';
import routes from './routes';
import AppDataSource from './db/context'
import Role from './models/Role';

function runServer() {

  const server = express();

  server.use(cors());
  server.use(express.json());
  server.use(routes);

  const PORT = 3333;

  server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

// SEED
AppDataSource.initialize()
  .then((context) => {
    const adminRole = new Role();
    adminRole.id = '5be3f402-0c14-4ece-90a1-121bebae2a00';
    adminRole.name = 'Administrator';
    context.manager.save(adminRole);

    runServer();
  })
  .catch((err) => {
    console.log(err);
    console.log('Server stopped!');
  });
