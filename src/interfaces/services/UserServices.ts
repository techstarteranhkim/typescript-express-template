import { UserAttributes } from '../models/UserAttributes';

export type UserAttributesCreationParams = Pick<
  UserAttributes,
  'email' | 'name' | 'password'
>;

export class UserAttributesService {
  public get(id: number, email?: string): UserAttributes {
    return {
      id,
      email: email ?? 'max@mustermann.de',
      name: 'Max Mustermann',
      password: 'today',
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public create(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    userCreationParams: UserAttributesCreationParams,
  ): UserAttributes {
    return {
      id: Math.floor(Math.random() * 10000),
      email: 'email' + Math.floor(Math.random() * 20000),
      name: 'name' + Math.floor(Math.random() * 10000),
      password: '' + Math.floor(Math.random() * 10000),
    };
  }
}
