import 'express-async-errors';
import { Router } from 'express';
import RolesRoutes from './routes.roles';
import UsersRoutes from './routes.users';

// Todas as rotas da nossa aplicação
const routes = Router();

routes.use('/roles', RolesRoutes);
routes.use('/users', UsersRoutes);

export default routes;
