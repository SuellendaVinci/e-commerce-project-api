import { Repository } from 'typeorm';
import DeleteUserCourseDto from '../../dtos/deleteUserCourseDto';
import User from '../../models/User';
import Course from '../../models/Course';
import UsersRepository from '../../repositories/usersRepository';
import CourseRepository from '../../repositories/coursesRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

export default class DeleteUserCoursesUseCase {
  private _userRepository: Repository<User>;
  private _courseRepository: Repository<Course>;

  constructor() {
    this._userRepository = UsersRepository;
    this._courseRepository = CourseRepository;
  }

  public async execute({
    user_id,
    course_id,
  }: DeleteUserCourseDto): Promise<HttpResponseDto | null> {
    const user = await this._userRepository.find({
      where: { id: user_id },
      relations: { courses: true },
    });

    const foundCourse = await this._courseRepository.find({
      where: { id: course_id },
    });

    if (foundCourse.length === 0) {
      return {
        statusCode: 404,
        data: {
          message: `Curso não encontrado!`,
        },
      };
    }

    const deletedCourse = user[0].courses.filter(
      (course) => course.id === course_id,
    )[0];

    if (!deletedCourse) {
      return {
        statusCode: 404,
        data: {
          message: `O aluno ${user[0].name} não está cadastrado no curso ${foundCourse[0].course_name}`,
        },
      };
    }

    user[0].courses = user[0].courses.filter(
      (course) => course.id !== course_id,
    );

    const response = await this._userRepository
      .save(user[0])
      .then((): HttpResponseDto => {
        return {
          statusCode: 201,
          data: {
            message: `Curso ${deletedCourse.course_name} deletado do usuário ${user[0].name}`,
          },
        };
      })
      .catch((err): HttpResponseDto => {
        return { statusCode: 500, data: err };
      });

    return response;
  }
}
