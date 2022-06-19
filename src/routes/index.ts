import 'express-async-errors';
import { Router } from 'express';

// Todas as rotas da nossa aplicação
const routes = Router();

routes.use('/', (req, res) => {
    res.status(200).send({ message: 'Hello World!' })
});

export default routes;
