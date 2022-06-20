import 'express-async-errors';
import { Router } from 'express';
import RolesRoutes from './routes.roles';
import UsersRoutes from './routes.users';
import AuthRoutes from './auth.routes';

// Todas as rotas da nossa aplicação
const routes = Router();

routes.use('/login', AuthRoutes);
routes.use('/roles', RolesRoutes);
routes.use('/users', UsersRoutes);

export default routes;
