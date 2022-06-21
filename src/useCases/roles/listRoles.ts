import { Repository } from 'typeorm';
import Role from '../../models/Role';
import RolesRepository from '../../repositories/rolesRepository';

export default class ListRolesUseCase {
  private _repository: Repository<Role>;

  constructor() {
    this._repository = RolesRepository;
  }

  public async execute(): Promise<Role[]> {
    return await this._repository.find({});
  }
}
