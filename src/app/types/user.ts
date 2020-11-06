export type User = {
  id?: number;
  name: string;
  lastName: string;
  age: number;
  username: string;
  email: string;
};

export type NewUser = {
  name: string;
  lastName: string;
  age: number;
  username?: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  username: string;
  name: string;
  lastName: string;
  age: number;
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
