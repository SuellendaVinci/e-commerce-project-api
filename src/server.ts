import express from 'express';
import cors from 'cors';
import routes from './routes';

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
runServer()
