import { Router } from 'express';

import CreateUserUseCase from '../useCases/users/createUser';
import UserDto from '../dtos/userDto';

// Todas as rotas de Users
const usersRoutes = Router();

// Cadastro
usersRoutes.post('/', async (request, response) => {
  const useCase = new CreateUserUseCase();
  const user = await useCase.execute(request.body as UserDto);
  const { statusCode, data } = user;

  return response.status(statusCode).send(data);
});

export default usersRoutes;
