// External imports
import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Autocomplete } from '@mui/material';

// Components
export const CategorySelect = ({ control, categories }) => {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          sx={{ width: '100%' }}
          {...field}
          id="category-select"
          options={categories}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: '100%' }}
              label="Category"
              variant="outlined"
            />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      name="category"
      control={control}
      defaultValue={null}
    />
  );
};
