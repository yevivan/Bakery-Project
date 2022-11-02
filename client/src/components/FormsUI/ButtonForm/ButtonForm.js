/* eslint-disable react/jsx-props-no-spreading */

// ... your code here
import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
// import Grid from '@material-ui/core/Grid';
// import styles from './ButtonForm.module.scss';

function ButtonForm({ children }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: 'contained',
    // color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    // <Grid className={styles.checkoutBtn}>
    <Button
      style={{
        color: '#f09ec4',
        backgroundColor: '#391113',
        padding: '12px',
        marginBottom: '10px',
      }}
      type="submit"
      {...configButton}
    >
      {children}
    </Button>
    // {/* </Grid> */}
  );
}

export default ButtonForm;
