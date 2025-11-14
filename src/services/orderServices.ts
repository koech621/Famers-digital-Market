import * as orderRepository from "../repository/orderRepository";

export const createOrder = async (order: orderRepository.NewOrder) => {
  return await orderRepository.createOrder(order);
};

export const getOrders = async () => {
  return await orderRepository.getOrders();
};

export const getOrderById = async (id: number) => {
  return await orderRepository.getOrderById(id);
};

export const updateOrder = async (id: number, order: Partial<orderRepository.NewOrder>) => {
  return await orderRepository.updateOrder(id, order);
};

export const deleteOrder = async (id: number) => {
  return await orderRepository.deleteOrder(id);
};
