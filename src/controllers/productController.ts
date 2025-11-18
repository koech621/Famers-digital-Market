import { Request, Response } from "express";
import * as productService from "../services/productServices";

// Add new product
<<<<<<< HEAD
export const addProduct = async (req: Request, res: Response) => {
=======
export const createProduct = async (req: Request, res: Response) => {
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
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
<<<<<<< HEAD
=======


// Get product by ID
export const getProduct = async (req: Request, res: Response) => {

  try {
    const { id } = req.params;

    const productId = parseInt(id, 10);

    if (!id || isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID. Must be a number." });
    }
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error: any) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedData = req.body;

    const result = await productService.updateProduct(id, updatedData);
    res.status(200).json(result);
  } catch (error: any) {
    console.error("Error updating product:", error);
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id, 10);

    if (!id || isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID. Must be a number." });
    }

    const result = await productService.deleteProduct(productId);

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
};
>>>>>>> f8891ecc3bb2f3f8888ff3709f73bdac584364a1
