import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';
<<<<<<< HEAD

const router = Router();

router.get('/', PaymentController.getAll);
router.get('/:id', PaymentController.getById);
router.post('/', PaymentController.create);
router.put('/:id', PaymentController.update);
router.delete('/:id', PaymentController.delete);
=======
import {verifyToken} from "../middleware/authMiddleware"

const router = Router();

router.get('/',verifyToken, PaymentController.getAll);
router.get('/:id',verifyToken, PaymentController.getById);
router.post('/',verifyToken, PaymentController.create);
router.put('/:id',verifyToken, PaymentController.update);
router.delete('/:id',verifyToken, PaymentController.delete);
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1

export default router;