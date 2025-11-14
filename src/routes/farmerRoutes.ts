import express from 'express';
import {
  getAllFarmers,
  addFarmer,
  getFarmerById,
  updateFarmer,
  deleteFarmer,
} from '../controllers/farmerController';

const router = express.Router();

router.get('/', getAllFarmers);
router.get('/:id', getFarmerById);
router.post('/', addFarmer);
router.put('/:id', updateFarmer);
router.delete('/:id', deleteFarmer);

export default router;
