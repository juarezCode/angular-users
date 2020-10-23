export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Users = {
  data: {
    total: number;
    users: User[];
  };
};
