import express from "express"
 import {getMarkets} from "../controllers/marketController";

 const router = express.Router();

 router.get("/",getMarkets);
 router.get("/:id",getMarkets);

 export default router;
