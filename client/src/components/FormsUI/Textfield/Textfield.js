/* eslint-disable react/jsx-props-no-spreading */

// ... your code here
import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#391113',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f09ec4',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#d8cbc0',
        border: '2px solid #d8cbc0',
      },
      '&:hover fieldset': {
        borderColor: '#f09ec4',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f09ec4',
      },
    },
  },
})(TextField);

function Textfield({ name, ...otherProps }) {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <CssTextField multiline {...configTextfield} variant="outlined" />;
}

export default Textfield;
