export interface IUser {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  status: number;
  auth_key: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
  password: string;
  password_reset_token: string;
  rank: string;
  rank_hide: string;
  discount: string;
  team: string;
  link_facebook: string;
  phone: string;
  address:
    {
      company: string,
      line: string,
      city: string,
      postcode: string,
      country: string,
      state: string
    };
}
