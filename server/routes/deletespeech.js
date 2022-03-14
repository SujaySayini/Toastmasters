import express from "express";
import { deleteSpeech } from "../controllers/speech.js";

const router = express.Router();

router.post('/', deleteSpeech);

export default router;