import { Request, Response } from 'express';
import { FarmerRepository } from '../repository/farmerRepository';

const farmerRepo = new FarmerRepository();

export const getAllFarmers = async (req: Request, res: Response) => {
  try {
    const farmers = await farmerRepo.getAllFarmers();
    res.json(farmers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error while fetching farmers');
  }
};

export const addFarmer = async (req: Request, res: Response) => {
  try {
    await farmerRepo.addFarmer(req.body);
    res.status(201).send('Farmer added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding farmer');
  }
};

export const getFarmerById = async (req: Request, res: Response) => {
  try {
    const farmer = await farmerRepo.getFarmerById(parseInt(req.params.id));
    if (!farmer) return res.status(404).send('Farmer not found');
    res.json(farmer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching farmer');
  }
};

export const updateFarmer = async (req: Request, res: Response) => {
  try {
    await farmerRepo.updateFarmer(parseInt(req.params.id), req.body);
    res.send('Farmer updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating farmer');
  }
};

export const deleteFarmer = async (req: Request, res: Response) => {
  try {
    await farmerRepo.deleteFarmer(parseInt(req.params.id));
    res.send('Farmer deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting farmer');
  }
};
