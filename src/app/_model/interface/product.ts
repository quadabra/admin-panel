export interface IProduct {
  entry: number;
  price_buy: number;
  price_sell: number;
  seo_link: string;
  weight: number;
  mail_model: string;
  vendor_code: string;
  brand_entry: number;
  manufacturer_entry: number;
  wh_position: string;
  product_availability_id: number;
  priority: string;
  priority_power: string;
  product_type_id: number;
  product_status_id: number;
  time_wait: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
  labels: [any];
  name: string;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  options: [{}];
  set_option_ids: [any];
  categories: [{}];
  brand_name: string;
  manufacturer_name: string;
  time_wait_array: {
    min: number,
    max: number
  };
  product_status_name: string;
  product_image: [
    {
      id: number,
      product_entry: number,
      image: string,
      sort_order: number,
      option_values: [
        {
          option_id: number,
          option_value_id: number,
          product_option_value_id: number
        }
        ]
    }
    ];
  product_videos: [{}];
  items: [any];
}
