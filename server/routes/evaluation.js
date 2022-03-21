import express from "express";
import { createEvaluation } from "../controllers/evaluation.js";

const router = express.Router();
router.post('/', createEvaluation);

export default router;