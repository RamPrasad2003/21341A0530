import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Container } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || '',
        company: searchParams.get('company') || '',
        minPrice: searchParams.get('minPrice') || '',
        maxPrice: searchParams.get('maxPrice') || '',
        minRating: searchParams.get('minRating') || '',
        availability: searchParams.get('availability') || ''
    });

    useEffect(() => {
        // Fetch products when filters change
        fetchProducts(filters);
    }, [filters]);

    const fetchProducts = (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        const url = queryParams ? `/test/index/?${queryParams}` : '/test/index/'; // Ensure base URL when no filters
        setLoading(true);
        axios.get(`http://localhost:8000${url}`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error.message);
                setLoading(false);
            });
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <Box sx={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, marginBottom: '10px' }}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            value={filters.category}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="Electronics">Electronics</MenuItem>
                            <MenuItem value="Fashion">Fashion</MenuItem>
                            <MenuItem value="Home">Home</MenuItem>
                            {/* Add more categories as needed */}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Company</InputLabel>
                        <Select
                            name="company"
                            value={filters.company}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="CompanyA">Company A</MenuItem>
                            <MenuItem value="CompanyB">Company B</MenuItem>
                            <MenuItem value="CompanyC">Company C</MenuItem>
                            {/* Add more companies as needed */}
                        </Select>
                    </FormControl>
                    <TextField
                        name="minPrice"
                        label="Min Price"
                        type="number"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        sx={{ flex: 1 }}
                    />
                    <TextField
                        name="maxPrice"
                        label="Max Price"
                        type="number"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        sx={{ flex: 1 }}
                    />
                    <TextField
                        name="minRating"
                        label="Min Rating"
                        type="number"
                        value={filters.minRating}
                        onChange={handleFilterChange}
                        sx={{ flex: 1 }}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Availability</InputLabel>
                        <Select
                            name="availability"
                            value={filters.availability}
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="true">In Stock</MenuItem>
                            <MenuItem value="false">Out of Stock</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button variant="contained" color="primary" onClick={() => fetchProducts(filters)}>
                    Apply Filters
                </Button>
            </Box>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="subtitle1">{product.company}</Typography>
                                <Typography variant="body2">Category: {product.category}</Typography>
                                <Typography variant="body2">Price: ${product.price}</Typography>
                                <Typography variant="body2">Rating: {product.rating}</Typography>
                                <Typography variant="body2">Discount: {product.discount}%</Typography>
                                <Typography variant="body2">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
