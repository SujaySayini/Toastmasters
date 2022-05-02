import express from 'express';
import { getUsers, removeUserClub, changeUserRole, setAdmin} from "../controllers/user.js";

const router = express.Router();

router.post('/getUser', getUsers);
router.post('/removeUserClub', removeUserClub)
router.post('/changeUserRole', changeUserRole)
router.post('/admin', setAdmin)

export default router