import express from "express";
import { addAhCounterData } from "../controllers/speech.js";

const router = express.Router();
router.post('/', addAhCounterData);

export default router;