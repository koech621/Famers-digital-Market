import { getPool } from "../db/config";

export interface Logistics {
  logistics_id?: number;
  order_id: number;
  driver_name: string;
  truck_number: string;
  status: string;
  delivery_date: Date;
}

export const logisticsRepository = {
  async getAllLogistics() {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Logistics");
    return result.recordset;
  },

  async getLogisticsById(id: number) {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("logistics_id", id)
      .query("SELECT * FROM Logistics WHERE logistics_id = @logistics_id");
    return result.recordset[0];
  },

  async createLogistics(logistics: Logistics) {
    const pool = await getPool();
    await pool
      .request()
      .input("order_id", logistics.order_id)
      .input("driver_name", logistics.driver_name)
      .input("truck_number", logistics.truck_number)
      .input("status", logistics.status)
      .input("delivery_date", logistics.delivery_date)
      .query(`
        INSERT INTO Logistics (order_id, driver_name, truck_number, status, delivery_date)
        VALUES (@order_id, @driver_name, @truck_number, @status, @delivery_date)
      `);
    return { message: "Logistics record created successfully" };
  },

  async updateLogistics(id: number, logistics: Logistics) {
    const pool = await getPool();
    await pool
      .request()
      .input("logistics_id", id)
      .input("order_id", logistics.order_id)
      .input("driver_name", logistics.driver_name)
      .input("truck_number", logistics.truck_number)
      .input("status", logistics.status)
      .input("delivery_date", logistics.delivery_date)
      .query(`
        UPDATE Logistics
        SET order_id = @order_id,
            driver_name = @driver_name,
            truck_number = @truck_number,
            status = @status,
            delivery_date = @delivery_date
        WHERE logistics_id = @logistics_id
      `);
    return { message: "Logistics record updated successfully" };
  },

  async deleteLogistics(id: number) {
    const pool = await getPool();
    await pool
      .request()
      .input("logistics_id", id)
      .query("DELETE FROM Logistics WHERE logistics_id = @logistics_id");
    return { message: "Logistics record deleted successfully" };
  },
};
