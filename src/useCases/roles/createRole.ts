import { Repository } from 'typeorm';
import RoleDto from '../../dtos/roleDto';
import Role from '../../models/Role';
import RoleRepository from '../../repositories/rolesRepository';

import HttpResponseDto from '../../dtos/httpResponseDto';

export default class CreateRoleUseCase {
  private _repository: Repository<Role>;

  constructor() {
    this._repository = RoleRepository;
  }

  public async execute({
    name,
  }: Omit<RoleDto, 'id'>): Promise<HttpResponseDto | null> {
   
    const role = new Role();
    role.name = name;

    const response = await this._repository
      .save(role)
      .then((): HttpResponseDto<Role> => {
        return { statusCode: 201, data: role };
      })
      .catch((err): HttpResponseDto => {


        return { statusCode: 500, data:err };
      });

    return response;
  }
}