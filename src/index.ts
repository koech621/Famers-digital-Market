import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import carRoutes from "./routes/marketRoutes";
import { getPool } from "./db/config";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cars", carRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("🌾 Digital Farm Marketplace API is running...");
});

// Start server
app.listen(PORT, async () => {
  try {
    await getPool();
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});