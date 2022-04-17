import express from 'express';
<<<<<<< HEAD
import{getPages,getPageBySearch, createPage, updatePage} from '../controllers/pages.js'
=======
import{getPage, createPage, getClubs} from '../controllers/pages.js'
>>>>>>> d4f3a5967e15b53ac7500d9531b21c1d7a7e48e0

const router = express.Router();

router.get('/' ,getPages);
router.get('/search' ,getPageBySearch);
router.post('/', createPage);
<<<<<<< HEAD
router.patch('/:id', updatePage);
=======
router.post('/getClub', getClubs);
>>>>>>> d4f3a5967e15b53ac7500d9531b21c1d7a7e48e0
export default router;