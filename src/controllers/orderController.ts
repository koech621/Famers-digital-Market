import { Request, Response } from "express";
import * as orderService from "../services/orderServices";

// CREATE
export const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.createOrder(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// READ ALL
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// READ ONE
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await orderService.getOrderById(id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await orderService.updateOrder(id, req.body);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await orderService.deleteOrder(id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
