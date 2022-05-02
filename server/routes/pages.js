import express from 'express';
import{ createPage, getClubPageInfo, setUserClub} from '../controllers/pages.js'
import{ getClubs, setActive} from '../controllers/pages.js'

const router = express.Router();

router.post('/', createPage);
<<<<<<< HEAD
//router.patch('/:id', updatePage);
=======
>>>>>>> c5b93cf54da2745ed56c8519d21ccabce7625de5
router.post('/getClub', getClubs);
router.post('/setActive', setActive)
router.post('/getOneClub', getClubPageInfo)
router.post('/setUserClub', setUserClub)
export default router;