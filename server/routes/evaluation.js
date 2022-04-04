import express from "express";
import { createEvaluation, getEvaluation } from "../controllers/evaluation.js";

const router = express.Router();
router.post('/', createEvaluation);
router.post('/get', getEvaluation)

export default router;