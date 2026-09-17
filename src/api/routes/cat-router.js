import {
  deleteCat,
  getCat,
  getCatById,
  postCat,
  putCat,
} from '../controllers/cat-controller.js';
import multer from 'multer';
const upload = multer({dest: 'uploads/'});

import express from 'express';
import {createThumbnail} from '../../middelwares/upload.js';
import {authenticateToken} from '../../middelwares/authentication.js';

const catRouter = express.Router();

// /api/v1/cats
catRouter
  .route('/')
  .get(getCat)
  .post(authenticateToken, upload.single('cat'), createThumbnail, postCat);

// catRouter.get('/', getCat);
// catRouter.post('/', upload.single('cat'), postCat);

// catRouter.get('/', (req, res) => {
//   return getCat(req, res);
// });

catRouter
  .route('/:id')
  .get(getCatById)
  .put(authenticateToken, putCat)
  .delete(authenticateToken, deleteCat);

export default catRouter;
