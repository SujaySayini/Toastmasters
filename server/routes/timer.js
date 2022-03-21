import express from "express";
import { setTime } from "../controllers/speech.js";

const router = express.Router();
router.post('/', setTime);

export default router;