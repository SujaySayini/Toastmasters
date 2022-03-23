import express from "express";
import { getSpeech, createSpeech, deleteSpeech } from "../controllers/speech.js";

const router = express.Router();

//router.get('/', getSpeech);
router.post('/', createSpeech);
router.post('/test', getSpeech);

export default router;