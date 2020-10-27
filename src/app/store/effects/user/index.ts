import { UsersEffects } from './users.effects';
import { UserEffects } from './user.effects';
import { CreateUserEffects } from './create-user.effects';
import { DeleteUserEffects } from './delete-user.effects';
import { UpdateUserEffects } from './update-user.effects';

export const USER_EFFECTS = [
  UsersEffects,
  UserEffects,
  CreateUserEffects,
  DeleteUserEffects,
  UpdateUserEffects,
];
