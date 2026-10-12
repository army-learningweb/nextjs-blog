export type Users = {
  id: number;
  name: string;
  email: string;
  phone: number;
  address: {
    street: string;
    suite: string;
  };
};