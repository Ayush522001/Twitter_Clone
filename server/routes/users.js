import express from 'express';
import { deleteUser, follow, getUser, unFollow } from "../controllers/user.js"
import { verifyToken } from '../verifytoke.js';
import { update } from '../controllers/user.js';
const router=express.Router();


//UPDATE USERS
router.put('/:id',verifyToken,update);

router.get('/find/:id',getUser);

router.delete("/:id",verifyToken,deleteUser);

router.put("/follow/:id",verifyToken,follow);

router.put("/unfollow/:id",verifyToken,unFollow);

export default router;