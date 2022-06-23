import { Router } from 'express';

import UserDto from '../dtos/userDto';
import RegisterCourseDto from '../dtos/registerUserCoursesDto';
import DeleteUserCourseDto from '../dtos/deleteUserCourseDto';
import CreateUserUseCase from '../useCases/users/createUser';
import RegisterUserCoursesUseCase from '../useCases/users/registerUserCourses';
import GetUserUseCase from '../useCases/users/getUser';
import DeleteUserCoursesUseCase from '../useCases/users/deleteUserCourse';

// Todas as rotas de Users
const usersRoutes = Router();

// Cadastro
usersRoutes.post('/', async (request, response) => {
  const useCase = new CreateUserUseCase();
  const user = await useCase.execute(request.body as UserDto);
  const { statusCode, data } = user;

  return response.status(statusCode).send(data);
});

// Cadastrar cursos do aluno
usersRoutes.post('/courses', async (request, response) => {
  const useCase = new RegisterUserCoursesUseCase();
  const user = await useCase.execute(request.body as RegisterCourseDto);
  const { statusCode, data } = user;

  return response.status(statusCode).send(data);
});

// Pesquisa
usersRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const useCase = new GetUserUseCase();
  const user = await useCase.execute({ id });
  const { statusCode, data } = user;

  return response.status(statusCode).send(data);
});

// Deletar curso do usuário
usersRoutes.patch('/courses', async (request, response) => {
  const useCase = new DeleteUserCoursesUseCase();
  const user = await useCase.execute(request.body as DeleteUserCourseDto);
  const { statusCode, data } = user;

  return response.status(statusCode).send(data);
});

export default usersRoutes;
