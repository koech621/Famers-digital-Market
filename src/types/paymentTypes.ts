export interface payment {
  payment_id: number;
  order_id: number;
  payment_method: string;
  reference: string;
  payment_date: string | null;
  payment_status: string;
}