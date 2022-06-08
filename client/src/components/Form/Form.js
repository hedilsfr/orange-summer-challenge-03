import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createProd, updateProd } from '../../actions/products';

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({ category: '', title: '', description: '', photo: '', price: '',stockQuantity:'' });
  const product = useSelector((state) => (currentId ? state.product.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({ category: '', title: '', description: '', photo: '', price: '',stockQuantity:''  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProd(productData));
      clear();
    } else {
      dispatch(updateProd(currentId, productData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${product.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="category" variant="outlined" label="Category" fullWidth value={productData.creator} onChange={(e) => setProductData({ ...productData, category: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.message} onChange={(e) => setProductData({ ...productData, message: e.target.value })} />
        <TextField name="price" variant="outlined" label="price" fullWidth multiline rows={4} value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
        <TextField name="stockQuantity" variant="outlined" label="Quantity" fullWidth multiline rows={4} value={productData.stockQuantity} onChange={(e) => setProductData({ ...productData, stockQuantity: e.target.value })} />

        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;