import express from 'express';
import{getPages,getPageBySearch, createPage, updatePage} from '../controllers/pages.js'

const router = express.Router();

router.get('/' ,getPages);
router.get('/search' ,getPageBySearch);
router.post('/', createPage);
router.patch('/:id', updatePage);
export default router;