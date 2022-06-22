import { Repository } from 'typeorm';
import CourseDto from '../../dtos/courseDto';
import Course from '../../models/Course';
import CoursesRepository from '../../repositories/coursesRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

export default class CreateCourseUseCase {
  private _repository: Repository<Course>;

  constructor() {
    this._repository = CoursesRepository;
  }

  public async execute({
    course_name,
    teacher_name,
    description,
    duration,
    price,
    photo,
  }: Omit<CourseDto, 'id'>): Promise<HttpResponseDto | null> {
    const course = new Course();
    course.course_name = course_name;
    course.teacher_name = teacher_name;
    course.description = description;
    course.duration = duration;
    course.price = price;
    course.photo = photo;

    const response = await this._repository
      .save(course)
      .then((): HttpResponseDto<Course> => {
        return { statusCode: 201, data: course };
      })
      .catch((err): HttpResponseDto => {
        return { statusCode: 500, data: err };
      });

    return response;
  }
}
