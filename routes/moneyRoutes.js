import express from "express";
import { getMoneyDetails, updateMoney } from "../controllers/moneyController.js";

const router = express.Router();

// Route to get money details
router.get("/", getMoneyDetails);

// Route to update money details
router.post("/update", updateMoney);

export default router;
