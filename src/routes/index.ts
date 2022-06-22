import 'express-async-errors';
import { Router } from 'express';
import RolesRoutes from './roles.routes';
import UsersRoutes from './users.routes';
import CoursesRoutes from './courses.routes';
import AuthRoutes from './auth.routes';

// Todas as rotas da nossa aplicação
const routes = Router();

routes.use('/login', AuthRoutes);
routes.use('/roles', RolesRoutes);
routes.use('/users', UsersRoutes);
routes.use('/courses', CoursesRoutes);

export default routes;
