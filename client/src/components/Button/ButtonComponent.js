import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './ButtonComponent.module.scss';

function ButtonComponent(props) {
  const { text, type, onClick } = props;
  // const theme = createTheme({
  //   palette: {
  //     neutral: {
  //       main: '#391113',
  //       contrastText: '#fa9bc9',
  //     },
  //     action: {
  //       disabledBackground: 'set color of background here',
  //       disabled: 'set color of text here',
  //     },
  //   },
  // });
  return (
  // <Grid item xs={12} sm={12} md={12}>
  //   <ThemeProvider theme={theme}>
  //     <Button
  //       className={styles.checkoutBtn}
  //       color="neutral"
  //       variant="contained"
  //       type="submit"
  //       disabled={!isValid}
  //       sx={{
  //         width: '100%',
  //         backgroundColor: '#391113',
  //         color: '#fa9bc9',
  //         fontFamily: 'Barlow Condensed',
  //         fontWeight: '200',
  //         fontSize: '23px',
  //         textTransform: 'capitalize',
  //         marginBottom: '10px',
  //       }}
  //     >
  //       Register
  //     </Button>
  //   </ThemeProvider>
  //   <Typography
  //     className={styles.title}
  //     sx={{
  //       fontFamily: 'Barlow Condensed',
  //       fontWeight: '300',
  //       fontSize: '18px',
  //       marginBottom: '10px',
  //       textAlign: 'center',
  //       textTransform: 'capitalize',
  //       color: '#391113',
  //     }}
  //   >
  //     *Required fields
  //   </Typography>
  //
  // </Grid>

    <Button
      type={type}
      className={styles.button}
      sx={{
        width: {
          xs: 100,
          sm: 100,
          md: 150,
          lg: 200,
          xl: 200,
        },
        fontFamily: 'Barlow Condensed',
        fontSize: 23,
        fontWeight: 200,
        color: '#f09ec4',
        backgroundColor: '#391113',
        borderRadius: 0,
        textTransform: 'none',
        padding: 0,
      }}
      variant="contained"
      onClick={onClick}

    >
      {text}

    </Button>
  );
}

export default ButtonComponent;
