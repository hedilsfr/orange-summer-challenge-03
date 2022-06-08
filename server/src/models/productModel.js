import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
category: String,
title: String,
description: String,
photo: String,
price: Number,
stockQuantity: Number,
});

var  Product= mongoose.model('Product', ProductSchema);

export default Product;