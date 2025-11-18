import { getPool } from '../db/config';
<<<<<<< HEAD
import { payment } from '../types/paymentTypes'; 
import sql from "mssql"

export const PaymentRepository = {
  async getAll(): Promise<payment[]> {
=======
import { Payment } from '../types/paymentTypes'; 
import sql from "mssql"

export const PaymentRepository = {
  async getAll(): Promise<Payment[]> {
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Payment');
    return result.recordset;
  },

<<<<<<< HEAD
  async getById(id: number): Promise<payment | null> {
=======
  async getById(id: number): Promise<Payment | null> {
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
    const pool = await getPool();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Payment WHERE payment_id = @id');
    return result.recordset[0] || null;
  },

<<<<<<< HEAD
  async create(payment: Omit<payment, 'payment_id'>): Promise<void> {
=======
  async create(payment: Omit<Payment, 'payment_id'>): Promise<void> {
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
    const pool = await getPool();
    await pool.request()
      .input('order_id', sql.Int, payment.order_id)
      .input('payment_method', sql.VarChar, payment.payment_method)
      .input('reference', sql.VarChar, payment.reference)
      .input('payment_date', sql.DateTime, payment.payment_date)
      .input('payment_status', sql.VarChar, payment.payment_status)
      .query(`
        INSERT INTO Payment (order_id, payment_method, reference, payment_date, payment_status)
        VALUES (@order_id, @payment_method, @reference, @payment_date, @payment_status)
      `);
  },

<<<<<<< HEAD
  async update(id: number, payment: Partial<payment>): Promise<void> {
=======
  async update(id: number, payment: Partial<Payment>): Promise<void> {
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
    const pool = await getPool();
    await pool.request()
      .input('id', sql.Int, id)
      .input('payment_method', sql.VarChar, payment.payment_method ?? null)
      .input('reference', sql.VarChar, payment.reference ?? null)
      .input('payment_date', sql.DateTime, payment.payment_date ?? null)
      .input('payment_status', sql.VarChar, payment.payment_status ?? null)
      .query(`
        UPDATE Payment
        SET payment_method = @payment_method,
            reference = @reference,
            payment_date = @payment_date,
            payment_status = @payment_status
        WHERE payment_id = @id
      `);
  },

  async delete(id: number): Promise<void> {
    const pool = await getPool();
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Payment WHERE payment_id = @id');
  },
};
