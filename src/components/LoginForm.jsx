// External imports
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Configs
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

// Styled components
const LoginFormStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

// Components
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <LoginFormStyled>
      <TextField
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
        variant="outlined"
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
