import Grid from '@mui/material/Grid';
import { Button, SvgIcon, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import ProductsCounter from '../ProductsCounter/ProductsCounter';

function BasketListItem(props) {
  const { item } = props;
  const { name, price, picture } = item;

  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: { xs: '3px solid #d8cbc0', sm: 'none' },
        borderBottom: '3px solid #d8cbc0',
        borderLeft: '3px solid #d8cbc0',
        borderRight: '3px solid #d8cbc0',
        minHeight: 180,
      }}
    >
      <Grid item xs={12} sm={6}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={1}
            sx={{
              display: 'flex',
              alignItems: 'start',
              p: 1,
            }}
          >
            <SvgIcon fontSize="medium">
              <ClearIcon />
            </SvgIcon>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button href="#" color="inherit" disableElevation sx={{ p: 2 }}>
              <img src={picture} alt="sweets" width="100%" />
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                p: 1,
              }}
            >
              <Button
                href="#"
                color="inherit"
                disableElevation
                sx={{
                  textTransform: 'none',
                }}
              >
                <Typography
                  content="span"
                  sx={{
                    fontSize: 20,
                  }}
                >
                  {name}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box>
          <Typography content="span" fontSize="inherit" color="black">
            {price}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box>
          <ProductsCounter key={name} sx={{ border: '3px solid #d8cbc0' }} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        sx={{
          display: {
            sm: 'flex',
            xs: 'none',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Box>
          <Typography content="span" fontSize="inherit" color="black">
            {price}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default BasketListItem;
