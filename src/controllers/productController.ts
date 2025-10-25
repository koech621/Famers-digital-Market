import { Request, Response } from "express";
import * as productService from "../services/productServices";

// Add new product
export const addProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.addProduct(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    console.error("Error adding product:", error);
    res.status(500).json({
      message: "Failed to add product",
      error: error.message,
    });
  }
};

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};
