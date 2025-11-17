import express from "express";
<<<<<<< HEAD
import { addProduct, getAllProducts } from "../controllers/productController";

const router = express.Router();

// POST: Add a new product
router.post("/", addProduct);

// GET: Get all products
router.get("/", getAllProducts);

=======
import { getAllProducts,getProduct } from "../controllers/productController";
import {verifyToken} from "../middleware/authMiddleware"
import { createProduct, deleteProduct, updateProduct } from "../controllers/productController";

const router = express.Router();


router.post("/",verifyToken, createProduct);
router.put ("/:id",verifyToken,updateProduct);
router. delete ("/:id",verifyToken,deleteProduct);
router.get("/", verifyToken, getAllProducts);
router.get("/:id",verifyToken ,getProduct)
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
export default router;
