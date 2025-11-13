// src/types/product.ts
export interface Product {
  product_id?: number;
  farmer_id: number;
  product_name: string;
  category?: string;
  stock_quantity: number;
  price: number;
  description?: string;
  created_at?: Date;
}
