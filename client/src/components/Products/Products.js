import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Product from './Product/Product';
import useStyles from './styles';
import axios from 'axios';

const url = 'http://localhost:5000/products';

const Products = ({ setCurrentId }) => {
  const [data,setData]=useState([])
  const products = axios.get(url).then((response) => setData(response.data));
  const classes = useStyles();


  return (
    !data.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((Product) => (
          <Grid key={Product._id} item xs={12} sm={6} md={6}>
            <Product Product={Product} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Products;