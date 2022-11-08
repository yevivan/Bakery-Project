import Grid from '@mui/material/Grid';
import { Box, SvgIcon, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ProductsCounter from '../ProductsCounter/ProductsCounter';

function ModalItem(props) {
  const { item } = props;
  const { name, price, picture } = item;

  return (
    <Grid
      container
      spacing={0.5}
      borderTop={1}
      borderColor="#e8e8e8"
      padding={1}
      minHeight="175px"
    >
      <Grid
        item
        xs={4}
      >
        <img src={picture} alt="sweets" width="92px" />
      </Grid>
      <Grid
        item
        xs={7}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            padding: '0 15px',
          }}
        >
          <Typography
            content="span"
            sx={{
              fontSize: '18px',
              fontFamily: 'sans-serif',
              color: '#391113',
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: '15px',
          }}
        >
          <ProductsCounter sx={{ border: '3px solid #d8cbc0' }} />
        </Box>
        <Box
          sx={{
            paddingLeft: '15px',
          }}
        >
          <Typography
            content="span"
            sx={{
              fontSize: '18px',
            }}
          >
            $
            {price}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <SvgIcon fontSize="medium" sx={{ color: '#ffffff', border: '1px solid #f09ec4', bgcolor: '#f09ec4' }}>
          <ClearIcon />
        </SvgIcon>
      </Grid>
    </Grid>
  );
}
export default ModalItem;
