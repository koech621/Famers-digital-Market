import { logisticsRepository, Logistics } from "../repository/logisticsRepository";

export const logisticsService = {
  async getAllLogistics() {
    return await logisticsRepository.getAllLogistics();
  },

  async getLogisticsById(id: number) {
    return await logisticsRepository.getLogisticsById(id);
  },

  async createLogistics(logistics: Logistics) {
    if (!logistics.order_id || !logistics.driver_name || !logistics.status) {
      throw new Error("Missing required logistics fields");
    }
    return await logisticsRepository.createLogistics(logistics);
  },

  async updateLogistics(id: number, logistics: Logistics) {
    const existing = await logisticsRepository.getLogisticsById(id);
    if (!existing) throw new Error("Logistics record not found");
    return await logisticsRepository.updateLogistics(id, logistics);
  },

  async deleteLogistics(id: number) {
    const existing = await logisticsRepository.getLogisticsById(id);
    if (!existing) throw new Error("Logistics record not found");
    return await logisticsRepository.deleteLogistics(id);
  },
};
