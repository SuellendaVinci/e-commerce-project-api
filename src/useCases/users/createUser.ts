import { Repository } from 'typeorm';
import UserDto from '../../dtos/userDto';
import User from '../../models/User';
import UsersRepository from '../../repositories/usersRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

export default class CreateUserUseCase {
  private _repository: Repository<User>;

  constructor() {
    this._repository = UsersRepository;
  }

  public async execute({
    name,
    last_name,
    gender_identity,
    sexual_orientation,
    race,
    birthday_date,
    email,
    password,
    role_id,
  }: Omit<UserDto, 'id'>): Promise<HttpResponseDto | null> {
    const user = new User();
    user.name = name;
    user.last_name = last_name;
    user.gender_identity = gender_identity;
    user.sexual_orientation = sexual_orientation;
    user.race = race;
    user.birthday_date = birthday_date;
    user.email = email;
    user.password = password;
    user.role_id = role_id;

    const response = await this._repository
      .save(user)
      .then((): HttpResponseDto<User> => {
        return { statusCode: 201, data: user };
      })
      .catch((err): HttpResponseDto => {
        return { statusCode: 500, data: err };
      });

    return response;
  }
}
