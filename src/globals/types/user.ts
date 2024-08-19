import { Timestamp } from "firebase/firestore";

export interface Address {
  address: Address[] | undefined;
  cep: string;
  city: string;
  country?: string;
  neighborhood: string;
  uf: string;
  line1: string;
  line2?: string;
  complement?: string;
  number?: string;
  alias?: string;
}

export interface UserOrders {}

export interface UserInterface {
  id?: string;
  uid?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  name: string;
  phone: string;
  email: string;
  role: "client" | "admin";
  avatarUrl?: string;
  address?: Address[];
  comments?: any;
  orders?: UserOrders[];
  // cart?: ShoppingCart[];
  apiKey?: string;
  tokens: {
    accessToken?: string;
    expirationTime?: Timestamp | null;
    refreshToken: string;
    isAuth: boolean;
  };
}
