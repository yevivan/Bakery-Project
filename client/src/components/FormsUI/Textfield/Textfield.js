/* eslint-disable react/jsx-props-no-spreading */

// ... your code here
import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

function TextfieldWrapper({
  name, index,
}) {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...name,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField
      type={index}
      {...configTextfield}
      sx={{
        '& label.Mui-focused': {
          color: '#391113',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#f09ec4',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#d8cbc0',
            border: '3px solid #d8cbc0',
          },
          '&:hover fieldset': {
            borderColor: '#f09ec4',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#f09ec4',
          },
        },
      }}
    />
  );
}
export default TextfieldWrapper;
