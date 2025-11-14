import express from "express";
import * as orderController from "../controllers/orderController";



export const orderRoutes =(app:any)=>{
app.post("/orders", orderController.createOrder);
app.get("/orders", orderController.getOrders);
app.get("/orders/:id", orderController.getOrderById);
app.put("/orders/:id", orderController.updateOrder);
app.delete("/orders/:id", orderController.deleteOrder);
}
