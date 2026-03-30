import {
  deleteCat,
  getCat,
  getCatById,
  postCat,
  putCat,
} from '../controllers/cat-controller.js';

import express from 'express';

const catRouter = express.Router();

// /api/v1/cats
catRouter.route('/').get(getCat).post(postCat);

// catRouter.get('/', getCat);
// catRouter.post('/', postCat);

// catRouter.get('/', (req, res) => {
//   return getCat(req, res);
// });

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;
