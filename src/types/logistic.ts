export interface Logistics {
  logistics_id?: number;
  order_id: number;
  driver_name: string;
  truck_number: string;
  status: string;
  delivery_date: Date;
}

export interface NewLogistics {
  logistics_id?: number;
  order_id: number;
  driver_name: string;
  truck_number: string;
  status: string;
  delivery_date: Date;
}

export interface    UpdateLogistics {
  logistics_id?: number;
  order_id: number;
  driver_name: string;
  truck_number: string;
  status: string;
  delivery_date: Date;
}