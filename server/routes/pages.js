import express from 'express';
import{getPages,getPageBySearch, createPage, updatePage} from '../controllers/pages.js'
import{ getClubs} from '../controllers/pages.js'

const router = express.Router();

router.get('/' ,getPages);
router.get('/search' ,getPageBySearch);
router.post('/', createPage);
router.patch('/:id', updatePage);
router.post('/getClub', getClubs);
export default router;