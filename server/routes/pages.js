import express from 'express';
import{getPage, createPage} from '../controllers/pages.js'

const router = express.Router();

router.get('/:id' ,getPage);
router.post('/', createPage);
export default router;