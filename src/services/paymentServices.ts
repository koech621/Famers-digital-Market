import { paymentRepository } from '../repository/paymentRepository';
import { payment } from './paymentServices';

export const PaymentService = {
  getAll: () => paymentRepository.getAll(),
  getById: (id: number) => paymentRepository.getById(id),
  create: (payment: Omit<payment, 'payment_id'>) => paymentRepository.create(payment),
  update: (id: number, payment: Partial<payment>) => paymentRepository.update(id, payment),
  delete: (id: number) => paymentRepository.delete(id),
};