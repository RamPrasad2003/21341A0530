// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import { Container, Grid } from '@mui/material';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    company: '',
    category: '',
  });

  useEffect(() => {
    axios.get('http://localhost:8000/test/index/')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const applyFilters = () => {
    const { name, company, category } = filters;
    const filtered = products.filter(product => 
      (!name || product.name.includes(name)) &&
      (!company || product.company.includes(company)) &&
      (!category || product.category.includes(category))
    );
    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <FilterBar filters={filters} onChange={handleFilterChange} onFilter={applyFilters} />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
