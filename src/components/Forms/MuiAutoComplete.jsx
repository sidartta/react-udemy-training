// External imports
import React from 'react';
import { Controller } from 'react-hook-form';

// Local imports
import { TextFieldStyled, AutoCompleteStyled } from './_Forms.styles';

// Components
export const CategorySelect = ({ control, categories }) => {
  return (
    <Controller
      render={({ field }) => (
        <AutoCompleteStyled
          {...field}
          id="category-select"
          options={categories}
          renderInput={(params) => (
            <TextFieldStyled {...params} label="Category" variant="outlined" />
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
