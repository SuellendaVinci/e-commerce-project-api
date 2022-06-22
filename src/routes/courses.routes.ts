import { Router } from 'express';

import CreateCourseUseCase from '../useCases/courses/createCourse';
import ListCoursesUseCase from '../useCases/courses/listCourses';
import CourseDto from '../dtos/courseDto';

// Todas as rotas de Courses
const coursesRoutes = Router();

// Cadastro
coursesRoutes.post('/', async (request, response) => {
  const useCase = new CreateCourseUseCase();
  const course = await useCase.execute(request.body as CourseDto);
  const { statusCode, data } = course;

  return response.status(statusCode).send(data);
});

// Listagem
coursesRoutes.get('/', async (request, response) => {
  const useCase = new ListCoursesUseCase();
  const courses = await useCase.execute();
  return response.send(courses);
});

export default coursesRoutes;
