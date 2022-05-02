import express from 'express';
import{ createPage, getClubPageInfo, setUserClub} from '../controllers/pages.js'
import{ getClubs, setActive} from '../controllers/pages.js'

const router = express.Router();

router.post('/', createPage);
router.post('/getClub', getClubs);
router.post('/setActive', setActive)
router.post('/getOneClub', getClubPageInfo)
router.post('/setUserClub', setUserClub)
export default router;