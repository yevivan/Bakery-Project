import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Textfield from '../FormsUI/Textfield/Textfield';
// import ButtonForm from '../FormsUI/ButtonForm/ButtonForm';
import styles from './OrderForm.module.scss';

function OrderForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      // .matches(/^[a-zA-Z\s]*$/, 'Should contain only letters and space')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      // .matches(/^[a-zA-Z\s]*$/, 'Should contain only letters and space')
      .required('Required'),
    email: Yup.string().email('Invalid email.').required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Container maxWidth="md">
          <div className={styles.orderForm}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                alert('Your order has been accepted');
              }}
            >
              {({ isValid }) => (
                <Form className={styles.form}>
                  <Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Typography className={styles.title}>
                        Order form
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="firstName" label="First Name" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="lastName" label="Last Name" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="email" label="Email" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="phone" label="Phone" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Typography className={styles.title}>Address</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="addressLine1" label="Address Line 1" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="addressLine2" label="Address Line 2" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="city" label="City" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Textfield name="state" label="State" />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <Button
                        className={styles.checkoutBtn}
                        type="submit"
                        disabled={!isValid}
                        style={{
                          width: '100%',
                          color: '#f09ec4',
                          backgroundColor: '#391113',
                          padding: '12px',
                          marginBottom: '10px',
                        }}
                      >
                        Check Out
                      </Button>
                      {/* <ButtonForm
                      // className={styles.checkoutBtn}
                      disabled={!isValid}
                    >
                      Check Out
                    </ButtonForm> */}
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default OrderForm;
