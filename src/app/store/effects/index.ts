import { AUTH_EFFECTS } from './auth';
import { USER_EFFECTS } from './user';

export const ROOT_EFFECTS = [...USER_EFFECTS, ...AUTH_EFFECTS];
