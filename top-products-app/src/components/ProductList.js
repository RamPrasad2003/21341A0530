import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductCard from './ProductCard';
import { Grid, Typography, Pagination } from '@mui/material';

const ProductList = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts({ ...filters, page });
      setProducts(result.products);
      setTotalPages(result.totalPages);
    };
    fetchProducts();
  }, [filters, page]);

  return (
    <div>
      <Typography variant="h4">All Products</Typography>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
};

export default ProductList;
