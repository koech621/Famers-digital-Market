import { Request, Response } from "express";
import { logisticsService } from "../services/logisticsServices";

export const logisticsController = {
  async getAll(req: Request, res: Response) {
    try {
      const logistics = await logisticsService.getAllLogistics();
      res.status(200).json(logistics);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const record = await logisticsService.getLogisticsById(id);
      if (!record) return res.status(404).json({ message: "Logistics not found" });
      res.status(200).json(record);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const record = req.body;
      const result = await logisticsService.createLogistics(record);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const record = req.body;
      const result = await logisticsService.updateLogistics(id, record);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const result = await logisticsService.deleteLogistics(id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
};
