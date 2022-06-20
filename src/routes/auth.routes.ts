import { Router } from 'express';
import AuthDto from '../dtos/authDto';
import AuthUserUseCase from '../useCases/auth/authUser';

const authRoutes = Router();

authRoutes.post('/', async (request, response) => {
  const useCase = new AuthUserUseCase();
  const authResponse = await useCase.execute(request.body as AuthDto);
  const { statusCode, data } = authResponse;

  return response.status(statusCode).send(data);
});

export default authRoutes;
