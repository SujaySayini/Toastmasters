import express from 'express';
import{getPage, createPage, getClubs} from '../controllers/pages.js'

const router = express.Router();

router.get('/:id' ,getPage);
router.post('/', createPage);
router.post('/getClub', getClubs);
export default router;