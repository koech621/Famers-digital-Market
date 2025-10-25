import express from "express";
import { addProduct, getAllProducts } from "../controllers/productController";

const router = express.Router();

// POST: Add a new product
router.post("/", addProduct);

// GET: Get all products
router.get("/", getAllProducts);

export default router;
