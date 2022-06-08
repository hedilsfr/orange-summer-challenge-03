import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';
import axios from 'axios';
const url = 'http://localhost:5000/products';
export const getProds = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchProducts;
// console.log('dataaaaaa',data)
//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
axios.get(url).then((response) => {console.log("heloooooo",response.data);  });
};

export const createProd = (Product) => async (dispatch) => {
  try {
    const { data } = await api.createProducts(Product);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProd = (id, Product) => async (dispatch) => {
  try {
    const { data } = await api.updateProducts(id, Product);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProducts(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};