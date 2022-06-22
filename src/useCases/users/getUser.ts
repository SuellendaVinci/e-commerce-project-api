import { Repository } from 'typeorm';
import User from '../../models/User';
import UserDto from '../../dtos/userDto';
import UsersRepository from '../../repositories/usersRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

export default class GetUserUseCase {
  private _repository: Repository<User>;

  constructor() {
    this._repository = UsersRepository;
  }

  public async execute({ id }: Pick<UserDto, 'id'>): Promise<HttpResponseDto> {
    const response = await this._repository
      .find({ where: { id }, relations: { courses: true } })
      .then((user): HttpResponseDto<User> => {
        return { statusCode: 200, data: user[0] };
      })
      .catch((err): HttpResponseDto => {
        return { statusCode: 404, data: err };
      });

    return response;
  }
}
