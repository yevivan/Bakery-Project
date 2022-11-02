import * as React from 'react';
import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { Typography, Box, Popper, Button, Container } from '@mui/material';
import ModalItem from '../ModalItem/ModalItem';
import { flexbox } from '@mui/system';


export default function SimplePopper() {

  const data = useSelector((state) => state.data.data, shallowEqual);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        BASKETMODAL
      </button>

      <Popper id={id} open={open} anchorEl={anchorEl} >
        <Box

          border={3}
          borderColor="#d8cbc0"
          maxWidth='315px'

          sx={{ maxHeight: '300px', overflowY: 'scroll' }}
        >
          <Box>
            {data.map((item) => (
              <ModalItem key={item.name} item={item} fromCart />

            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography
              sx={{
                margin: '10px',
                fontSize: '20px',
                fontFamily: "sans-serif",
                color: '#391113',
              }}>
              TOTAL: price.
            </Typography>

            <Button
              variant="contained"
              sx={{ color: '#f09ec4', bgcolor: '#391113', margin: '10px', width: '90%', padding: '10px' }}
            >CHECKOUT</Button>
          </Box>
        </Box>
      </Popper>
    </div>
  );
}