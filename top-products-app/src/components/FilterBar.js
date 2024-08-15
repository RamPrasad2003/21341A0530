// src/components/FilterBar.js
import React from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const FilterBar = ({ filters, onChange, onFilter }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={filters.name}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          name="company"
          value={filters.company}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          value={filters.category}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={onFilter}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
