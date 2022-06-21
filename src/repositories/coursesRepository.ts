import Course from '../models/Course';
import dataSource from '../db/context';

const CourseRepository = dataSource.getRepository(Course).extend({});
export default CourseRepository;