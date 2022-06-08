import express from 'express';

import { getProds, getProduit, createProd ,updateProd, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProds);
router.post('/', createProd);
router.get('/:id', getProduit);
router.patch('/:id', updateProd);
router.delete('/:id', deleteProduct);


export default router;