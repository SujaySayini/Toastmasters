import express from "express";
import { addCommentCard } from "../controllers/speech.js";

const router = express.Router();
router.post('/', addCommentCard);

export default router;