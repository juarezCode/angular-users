export type User = {
  id: number;
  name: string;
  username?: string;
  email: string;
};

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name: string;
  email: string;
};

export type Users = {
  data: {
    total: number;
    users: User[];
  };
};

export type UserLogin = {
  name: string;
  email: string;
};

export type UserResponse = {
  status: string;
  data: User;
};

export type LoginResponse = {
  status: string;
  data: {
    token: string;
    userId: number;
  };
};
