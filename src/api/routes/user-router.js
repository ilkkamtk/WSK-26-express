import {authenticateToken} from '../../middelwares/authentication.js';
import {
  deleteUser,
  getUser,
  getUserById,
  postUser,
  putUser,
} from '../controllers/user-controller.js';

import express from 'express';

const userRouter = express.Router();

// /api/v1/users
userRouter.route('/').get(getUser).post(postUser);

userRouter
  .route('/:id')
  .get(getUserById)
  .put(authenticateToken, putUser)
  .delete(authenticateToken, deleteUser);

export default userRouter;
