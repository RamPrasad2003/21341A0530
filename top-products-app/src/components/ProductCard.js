// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="textSecondary">Company: {product.company}</Typography>
        <Typography color="textSecondary">Category: {product.category}</Typography>
        <Typography color="textSecondary">Price: ${product.price}</Typography>
        <Typography color="textSecondary">Rating: {product.rating}</Typography>
        <Typography color="textSecondary">Discount: ${product.discount}</Typography>
        <Typography color="textSecondary">Availability: {product.availability}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
