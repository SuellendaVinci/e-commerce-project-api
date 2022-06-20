import 'express-async-errors';
import { Router } from 'express';
import RolesRoutes from './routes.roles';

// Todas as rotas da nossa aplicação
const routes = Router();

routes.use('/roles', RolesRoutes);

export default routes;
