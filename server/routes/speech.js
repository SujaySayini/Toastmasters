import express from "express";
import { getSpeech, createSpeech } from "../controllers/speech.js";

const router = express.Router();

router.get('/', getSpeech);
router.post('/', createSpeech);

export default router;