import express from "express";
import { getSpeech, createSpeech} from "../controllers/speech.js";

const router = express.Router();

router.post('/', createSpeech);
router.post('/test', getSpeech);

export default router;