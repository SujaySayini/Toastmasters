import express from 'express';
import{getPages,getPageBySearch, createPage, updatePage, getClubPageInfo} from '../controllers/pages.js'
import{ getClubs, setActive} from '../controllers/pages.js'

const router = express.Router();

router.get('/' ,getPages);
router.get('/search' ,getPageBySearch);
router.post('/', createPage);
router.patch('/:id', updatePage);
router.post('/getClub', getClubs);
router.post('/setActive', setActive)
router.post('/getOneClub', getClubPageInfo)
export default router;