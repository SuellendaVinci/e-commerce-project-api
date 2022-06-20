import Role from '../models/Role';
import dataSource from '../db/context';

const RoleRepository = dataSource.getRepository(Role).extend({});
export default RoleRepository;