export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  website: string;
}

interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}