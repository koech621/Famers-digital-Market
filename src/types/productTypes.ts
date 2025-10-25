// src/types/product.ts
export interface Product {
  product_id?: number;
  farmer_id: number;
  product_name: string;
  category?: string;
  quantity: number;
  price: number;
  image_url?: string;
  description?: string;
  created_at?: Date;
}
