import express from 'express';

import { getPosts, getPostsBySearch, getPost} from '../controllers/pages.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);


export default router;