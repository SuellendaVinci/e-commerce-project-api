import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { JwtAssignKey } from '../../configs/auth.config';
import AuthDto from '../../dtos/authDto';
import User from '../../models/User';
import UserRepository from '../../repositories/usersRepository';
import HttpResponseDto from '../../dtos/httpResponseDto';

const errorMessage = 'Usuário e/ou senha inválido(s)';

interface AuthResponse {
  user: User;
  jwt: string;
}

export default class AuthUserUseCase {
  private _repository: Repository<User>;

  constructor() {
    this._repository = UserRepository;
  }

  public async execute({ email, password }: AuthDto): Promise<HttpResponseDto> {
    // Buscar o usuário
    const user = await this._repository
      .findOne({
        where: {
          email,
        },
        relations: {
          role: true,
        },
      })
      .then((resp): HttpResponseDto => {
        if (resp.password !== password) {
          return { statusCode: 400, data: { errors: [errorMessage] } };
        }
        return { statusCode: 200, data: resp };
      });

    if (user.statusCode === 200) {
      // Gerar o JWT
      const jwt = sign(
        { id: user.data.id, role: user.data.role },
        JwtAssignKey,
      );

      delete user.data.password;

      const response: HttpResponseDto<AuthResponse> = {
        statusCode: user.statusCode,
        data: { user: user.data, jwt },
      };

      return response;
    }

    return { statusCode: user.statusCode, data: user.data };
  }
}
