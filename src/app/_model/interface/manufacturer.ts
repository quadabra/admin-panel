import {IBrand} from './brand';

export interface IManufacturer {
  entry: number;
  name: string;
  added_value: string;
  contact_person: string;
  phone: string;
  email: string;
  site: string;
  vk: string;
  bank: string;
  color: string;
  contract: string;
  sales: string;
  address: string;
  shipping: string;
  comment: string;
  brands: IBrand[];
}
