
import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/productModel.js';

const router = express.Router();

export const getProds = async (req, res) => { 
    try {
        const prod = await Product.find();
                
        res.status(200).json(prod);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduit = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Product.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProd = async (req, res) => {
    const { category,
        title,
        description,
        photo,
        price,
        stockQuantity  } = req.body;

    const newProduct = new Product({ category,
        title,
        description,
        photo,
        price,
        stockQuantity  })

    try {
        await newProduct.save();

        res.status(201).json(newProduct );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProd = async (req, res) => {
    const { id } = req.params;
    const { category,
        title,
        description,
        photo,
        price,
        stockQuantity } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedProd = { category,
        title,
        description,
        photo,
        price,
        stockQuantity, _id: id };

    await Product.findByIdAndUpdate(id, updatedProd, { new: true });

    res.json(updatedProd);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Product.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;