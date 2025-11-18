export interface Order {
  user_id: number;
  product_id: number;
  market_id: number;
  quantity: number;
  total_amount: number;
  order_date: string;
  status: string;
}

export interface NewOrder {
  user_id: number;
  product_id: number;
  market_id: number;
  quantity: number;
  total_amount: number;
  order_date: string;
  status: string;
}

export interface UpdateOrder {
  user_id: number;
  product_id: number;
  market_id: number;
  quantity: number;
  total_amount: number;
  order_date: string;
  status: string;
}
