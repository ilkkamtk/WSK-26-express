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

const catRouter = express.Router();

// /api/v1/cats
catRouter.route('/').get(getCat).post(upload.single('cat'), postCat);

// catRouter.get('/', getCat);
// catRouter.post('/', upload.single('cat'), postCat);

// catRouter.get('/', (req, res) => {
//   return getCat(req, res);
// });

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;
