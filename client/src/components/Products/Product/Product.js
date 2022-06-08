import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useDispatch } from 'react-redux';

import {  deleteProduct } from '../../../actions/products';
import useStyles from './styles';

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{product.category}</Typography>
       
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(product._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{product.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        
        <Button size="small" color="primary" onClick={() => dispatch(deleteProduct(product._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Product;