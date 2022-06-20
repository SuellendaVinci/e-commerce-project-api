import { Router } from 'express';

import CreateRoleUseCase from '../useCases/roles/createRole';
import RoleDto from '../dtos/roleDto';

// Todas as rotas de Roles
const rolesRoutes = Router();

// Cadastro
rolesRoutes.post('/', async (request, response) => {
  const useCase = new CreateRoleUseCase();
  const role = await useCase.execute(request.body as RoleDto);
  const { statusCode, data } = role;

  return response.status(statusCode).send(data);
});

export default rolesRoutes;