import * as React from 'react';
// import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  Typography,
  Box,
  Popper,
  Button,
  SvgIcon,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ModalItem from '../ModalItem/ModalItem';

export function Modal() {
  const data = useSelector((state) => state.data.data, shallowEqual);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };
  // const id = open ? 'simple-popper' : undefined;

  const isOpenModal = useSelector((state) => state.isOpenModal);
  // const handleClick = (event) => {
  //   {isOpenModal ? closeModal : openModal}
  // };
  const open = Boolean(isOpenModal);
  const id = open ? 'simple-popper' : undefined;


  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        BASKETMODAL
      </button>
      <Popper id={id} open={open} anchorEl={isOpenModal}>
        <Box
          sx={{
            maxHeight: '450px',
            maxWidth: { xs: '315px', md: '383px' },
            border: '3px solid #d8cbc0',
            bgcolor: '#ffffff',
          }}
        >
          <Box sx={{ maxHeight: '315px', overflowY: 'scroll' }}>
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
              borderTop: '1px solid #e8e8e8',
            }}
          >
            <Typography
              sx={{
                margin: '10px',
                fontSize: '20px',
                fontFamily: 'sans-serif',
                color: '#391113',
              }}
            >
              TOTAL: $ price.
            </Typography>

            <NavLink
              to="/basket"
            >
              <Button
                variant="contained"
                sx={{
                  color: '#f09ec4',
                  bgcolor: '#391113',
                  margin: '10px',
                  width: '90%',
                  padding: '10px',
                  fontSize: '18px',
                  textTransform: 'none',
                }}
                onClick={isOpenModal ? closeModal : openModal}
              >
                Checkout
              </Button>
            </NavLink>
          </Box>
          <SvgIcon
            fontSize="medium"
            onClick={isOpenModal ? closeModal : openModal}
            sx={{
              color: '#f09ec4',
              border: '1px solid #f09ec4',
              borderRadius: '50%',
              bgcolor: '#391113',
              position: 'absolute',
              top: '20px',
              left: '-12px',
              padding: '3px',

            }}
          >
            <ClearIcon />
          </SvgIcon>
        </Box>
      </Popper>
    </div>
  );
}
