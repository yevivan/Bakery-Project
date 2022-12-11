/* eslint-disable react/jsx-props-no-spreading */

// ... your code here
import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { useField } from 'formik';

function TextfieldWrapper({
  name, index, ...otherProps
}) {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  const genders = [
    {
      label: 'female',
      value: 'female',
    },
    {
      label: 'male',
      value: 'male',
    },
    {
      label: 'another',
      value: 'another',
    },
  ];

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {(index === 'select') ? (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            // {...configTextfield}
            id="outlined-select-currency"
            select
            label="Select"
            value={gender}
            onChange={handleChange}
            helperText="Please select your currency"
            name={gender}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        // <TextField
        //   select
        //   value={gender}
        //   {...configTextfield}
        //   sx={{
        //     '& label.Mui-focused': {
        //       color: '#391113',
        //     },
        //     '& .MuiInput-underline:after': {
        //       borderBottomColor: '#f09ec4',
        //     },
        //     '& .MuiOutlinedInput-root': {
        //       '& fieldset': {
        //         borderColor: '#d8cbc0',
        //         border: '3px solid #d8cbc0',
        //       },
        //       '&:hover fieldset': {
        //         borderColor: '#f09ec4',
        //       },
        //       '&.Mui-focused fieldset': {
        //         borderColor: '#f09ec4',
        //       },
        //     },
        //   }}
        // />

      ) : (
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
      )}
    </>

  );
}
export default TextfieldWrapper;
