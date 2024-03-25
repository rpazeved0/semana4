import { Address } from './address';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
};
