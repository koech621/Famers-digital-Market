import express from "express";
import { logisticsController } from "../controllers/logisticsController";

const router = express.Router();

export const logisticsRoutes = (app:any) => {
app.get("/logistics", logisticsController.getAll);
app.get("/logistics/:id", logisticsController.getById);
app.post("/logistics", logisticsController.create);
app.put("/logistics/:id", logisticsController.update);
app.delete("/logistics/:id", logisticsController.delete);

}

