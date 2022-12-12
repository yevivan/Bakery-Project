import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Container, Grid, Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import { useDispatch } from 'react-redux';
import Textfield from '../../FormsUI/Textfield/Textfield';
import styles from './Account.module.scss';
// import { registeredUserLogin } from '../../../store/slices/userLoginSlices';
// import { getCartItems } from '../../../store/slices/basketArrFromServer';
// import { getLoggedUserFromServer } from '../../../store/slices/getLoggedUserSlices';
// import { registerNewUser } from '../../../api/registerNewUser';

function Account() {
  // const dispatch = useDispatch();

  const initialValuesLogin = {
    loginOrEmail: '',
    password: '',
  };
  const initialValuesRegistartion = {
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    birthdate: '',
    phoneNumber: '',
  };
  const validationSchemaLogin = Yup.object().shape({
    loginOrEmail: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Must be longer than 8 characters')
      .required('Required'),
  });
  const validationSchemaRegistration = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      .required('Required'),
    firstName: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Must be longer than 8 characters')
      .required('Required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phoneNumber: Yup.string().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Phone number is not valid'),
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
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={{
          xs: '6', sm: '6', md: '12', lg: '12', xl: '12',
        }}
        wrap="nowrap"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={5} sm={5} md={5}>
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={validationSchemaLogin}
            onSubmit={(values, { resetForm }) => {
              const userData = values;
              console.log(userData);
              // dispatch(registeredUserLogin(values));
              // dispatch(getCartItems());
              // dispatch(getLoggedUserFromServer());
              resetForm();
              // alert('Your order has been accepted');
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
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Form>
            )}

          </Formik>
        </Grid>
        <Grid item xs={5} sm={5} md={5}>
          <Formik
            initialValues={initialValuesRegistartion}
            validationSchema={validationSchemaRegistration}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              // registerNewUser(values);
              resetForm();
              // alert('Your order has been accepted');
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
                      Create an Account
                    </Typography>
                    <Typography
                      className={styles.title}
                      sx={{
                        fontFamily: 'Asap',
                        fontWeight: '300',
                        fontSize: '12px',
                        lineHeight: '1.5',
                        letterSpacing: '0.03em',
                        marginBottom: '10px',
                        textAlign: 'left',
                        color: '#111',
                      }}
                    >
                      Please let us know more information about you as this will enable us to
                      tailor what you receive from us to be more relevant. We will not pass
                      your information to any third parties, it will only be used by The
                      Hummingbird Bakery.
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
                      First name*
                    </Typography>

                    <Textfield name="firstName" index="text" />
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
                      Last name*
                    </Typography>

                    <Textfield name="lastName" index="text" />
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
                      Login*
                    </Typography>

                    <Textfield name="login" index="text" />
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
                      Email address*
                    </Typography>

                    <Textfield name="email" index="text" />
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
                      Password*
                    </Typography>

                    <Textfield name="passwordConfirmation" index="password" />
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
                      Confirm password*
                    </Typography>

                    <Textfield name="password" index="password" />
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
                      Date of Birth
                    </Typography>
                    <Textfield name="birthdate" index="date" />
                    <Typography
                      className={styles.title}
                      sx={{
                        fontFamily: 'Asap',
                        fontWeight: '300',
                        fontSize: '12px',
                        lineHeight: '1.5',
                        letterSpacing: '0.03em',
                        marginTop: '10px',
                        textAlign: 'left',
                        color: '#494949',
                      }}
                    >
                      Birthday + cake, it’s a no-brainer! Let us know when it’s
                      your birthday so we can help sweeten up your special day!
                      {' '}

                    </Typography>

                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                      marginBottom: '25px',
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
                      Phone number
                    </Typography>

                    <Textfield name="phoneNumber" index="text" />
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
                        Register
                      </Button>
                    </ThemeProvider>
                    <Typography
                      className={styles.title}
                      sx={{
                        fontFamily: 'Barlow Condensed',
                        fontWeight: '300',
                        fontSize: '18px',
                        marginBottom: '10px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#391113',
                      }}
                    >
                      *Required fields
                    </Typography>

                  </Grid>

                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Account;
