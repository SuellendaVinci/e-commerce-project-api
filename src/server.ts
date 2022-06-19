import express from 'express';
import cors from 'cors';


function runServer() {

  const server = express();

  server.use(cors());
  server.use(express.json());

  const PORT = 3333;

  server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}
