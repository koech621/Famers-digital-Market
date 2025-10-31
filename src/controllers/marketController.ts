import { Request, Response } from 'express';
import * as marketService from "../services/marketServices";

export const getMarkets = async (req: Request, res: Response): Promise<void> => {
  try {
    const markets = await marketService.getallMarket();
    res.status (200).json(markets);
  } catch (error: any) {
    res.status (500).json({ error: error.message });
  }
};
