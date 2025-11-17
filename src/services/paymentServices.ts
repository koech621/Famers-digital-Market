import { PaymentRepository } from '../repository/paymentRepository';
import { Payment } from '../types/paymentTypes';  

export const PaymentService = {
  getAll: () => PaymentRepository.getAll(),
  getById: (id: number) => PaymentRepository.getById(id),
  create: (payment: Omit<Payment, 'payment_id'>) => PaymentRepository.create(payment),
  update: (id: number, payment: Partial<Payment>) => PaymentRepository.update(id, payment),
  delete: (id: number) => PaymentRepository.delete(id),
};
