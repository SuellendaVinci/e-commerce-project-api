import User from '../models/User';
import dataSource from '../db/context';

const UserRepository = dataSource.getRepository(User).extend({});
export default UserRepository;
