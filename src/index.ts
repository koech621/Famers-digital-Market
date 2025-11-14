import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import {getPool} from "./db/config";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import { orderRoutes } from "./routes/orderRoutes";
import { logisticsRoutes } from "./routes/logisticsRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
     methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }

  )
) 



// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

orderRoutes(app);
logisticsRoutes(app);





// Root route
app.get("/", (req: Request, res: Response) => {
  res.send(" Digital Farm Marketplace API is running...");
});

// Start server
app.listen(PORT, async () => {
  try {
    await (getPool)();
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error(" Error starting server:", error);
  }
});
