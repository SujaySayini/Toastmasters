import express from 'express';
<<<<<<< HEAD
import{getPages,getPageBySearch, createPage} from '../controllers/pages.js'
import{ getClubs} from '../controllers/pages.js'
=======
import{getPages,getPageBySearch, createPage, updatePage, getClubPageInfo} from '../controllers/pages.js'
import{ getClubs, setActive} from '../controllers/pages.js'
>>>>>>> 5c58bf0b444eefb3245a7d57f056463aab30efe2

const router = express.Router();

router.get('/' ,getPages);
router.get('/search' ,getPageBySearch);
router.post('/', createPage);
//router.patch('/:id', updatePage);
router.post('/getClub', getClubs);
router.post('/setActive', setActive)
router.post('/getOneClub', getClubPageInfo)
export default router;