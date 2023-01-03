import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import Textfield from '../../FormsUI/Textfield/Textfield';
import styles from './Login.module.scss';
import { registeredUserLogin } from '../../../store/slices/userLoginSlices';
import { getCartItems } from '../../../store/slices/basketArrFromServer';
import { getLoggedUserFromServer } from '../../../store/slices/getLoggedUserSlices';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.loggedUser.loggedUser);
  const initialValuesLogin = {
    loginOrEmail: '',
    password: '',
  };
  const validationSchemaLogin = Yup.object().shape({
    loginOrEmail: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Must be longer than 8 characters')
      .required('Required'),
  });
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#391113',
        contrastText: '#fa9bc9',
      },
      action: {
        disabledBackground: 'set color of background here',
        disabled: 'set color of text here',
      },
    },
  });
  function isLogin(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for (const i in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(i)) { return false; }
    }
    return navigate('/');
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={(values, { resetForm }) => {
          dispatch(registeredUserLogin(values));
          dispatch(getCartItems());
          dispatch(getLoggedUserFromServer());
          isLogin(user);
          resetForm();
        }}
      >
        {({ isValid }) => (
          <Form className={styles.form}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  className={styles.title}
                  sx={{
                    fontFamily: 'Barlow Condensed',
                    fontWeight: '300',
                    fontSize: '50px',
                    marginBottom: '10px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    color: '#391113',
                  }}
                >
                  Login
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                  marginBottom: '6px',
                }}
              >
                <Typography
                  className={styles.title}
                  sx={{
                    fontFamily: 'Barlow Condensed',
                    fontWeight: '300',
                    fontSize: '24px',
                    marginBottom: '10px',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#391113',
                  }}
                >
                  Email address
                </Typography>

                <Textfield name="loginOrEmail" index="text" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                  marginBottom: '30px',
                }}
              >
                <Typography
                  className={styles.title}
                  sx={{
                    fontFamily: 'Barlow Condensed',
                    fontWeight: '300',
                    fontSize: '24px',
                    marginBottom: '10px',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#391113',
                  }}
                >
                  Password
                </Typography>

                <Textfield name="password" index="password" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <ThemeProvider theme={theme}>
                  <Button
                    className={styles.checkoutBtn}
                    color="neutral"
                    variant="contained"
                    type="submit"
                    disabled={!isValid}
                    sx={{
                      width: '100%',
                      backgroundColor: '#391113',
                      color: '#fa9bc9',
                      fontFamily: 'Barlow Condensed',
                      fontWeight: '200',
                      fontSize: '23px',
                      textTransform: 'capitalize',
                      marginBottom: '10px',
                    }}
                  >
                    Log In
                  </Button>
                  <Box display="flex" justifyContent="center">
                    <NavLink to="/registration">
                      <Typography
                        sx={{
                          fontFamily: 'Barlow Condensed',
                          fontWeight: '300',
                          fontSize: '18px',
                          marginBottom: '10px',
                          textTransform: 'capitalize',
                          textDecoration: 'underline',
                          color: '#391113',
                          '&:hover': {
                            color: '#fa9bc9',
                          },
                        }}
                      >
                        Registration
                      </Typography>

                    </NavLink>
                  </Box>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Form>
        )}

      </Formik>
    </Container>
  );
}
export default Login;
