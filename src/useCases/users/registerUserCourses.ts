import { Repository } from 'typeorm';
import RegisterUserCoursesDto from '../../dtos/registerUserCoursesDto';
import User from '../../models/User';
import Course from '../../models/Course';
import UsersRepository from '../../repositories/usersRepository';
import CourseRepository from '../../repositories/coursesRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

export default class RegisterUserCoursesUseCase {
  private _userRepository: Repository<User>;
  private _courseRepository: Repository<Course>;

  constructor() {
    this._userRepository = UsersRepository;
    this._courseRepository = CourseRepository;
  }

  public async execute({
    user_id,
    courses_id,
  }: RegisterUserCoursesDto): Promise<HttpResponseDto | null> {
    const user = await this._userRepository.find({
      where: { id: user_id },
      relations: { courses: true },
    });

    const filterNotRegisteredUserCourses = (course_id: string) =>
      !user[0].courses.find((course) => course_id === course.id);

    const formatCoursesId = (course_id: string) => ({ id: course_id });

    const formatedFilteredCoursesId = courses_id
      .filter(filterNotRegisteredUserCourses)
      .map(formatCoursesId);

    if (formatedFilteredCoursesId.length === 0) {
      return { statusCode: 201, data: user[0] };
    }

    const courses = await this._courseRepository.find({
      where: formatedFilteredCoursesId,
    });

    user[0].courses = [...user[0].courses, ...courses];

    const response = await this._userRepository
      .save(user)
      .then((): HttpResponseDto<User> => {
        return { statusCode: 201, data: user[0] };
      })
      .catch((err): HttpResponseDto => {
        return { statusCode: 500, data: err };
      });

    return response;
  }
}
