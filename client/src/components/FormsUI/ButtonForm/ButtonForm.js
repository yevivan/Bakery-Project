/* eslint-disable react/jsx-props-no-spreading */

// ... your code here
import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

function ButtonForm({ children }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
}

export default ButtonForm;
