export interface IBrandMultiLang {
  id: number;
  logo: string;
  name: {
    EN: string;
    RU: string;
  };
  description: {
    EN: string;
    RU: string;
  };
  priority: string;
  priority_power: string;
  manufacturer_entry: number;
}
