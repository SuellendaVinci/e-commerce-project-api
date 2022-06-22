import { Repository } from 'typeorm';
import Course from '../../models/Course';
import CoursesRepository from '../../repositories/coursesRepository';

export default class ListCoursesUseCase {
  private _repository: Repository<Course>;

  constructor() {
    this._repository = CoursesRepository;
  }

  public async execute(): Promise<Course[]> {
    return await this._repository.find({});
  }
}
