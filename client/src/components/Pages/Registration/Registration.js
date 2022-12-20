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
import styles from './Registration.module.scss';
import { registerNewUser } from '../../../api/registerNewUser';

function Registration() {
//   const dispatch = useDispatch();
  const initialValuesRegistartion = {
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    birthdate: '',
    postcode: '',
  };
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
    <Container
      maxWidth="sm"
      display="flex"
      justifyContent="center"
      alignItem="flex-start"
      sx={{
        marginBottom: '40px',
      }}
    >
      <Formik
        initialValues={initialValuesRegistartion}
        validationSchema={validationSchemaRegistration}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          registerNewUser(values);
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
                    marginBottom: '10px',
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
                  Postcode
                </Typography>

                <Textfield name="postcode" index="text" />
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
                  Confirm password*
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
    </Container>
  );
}
export default Registration;
