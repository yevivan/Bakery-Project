import { useDispatch } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import styles from '../FormProduct/FormProduct.module.scss';
// import FieldTextForm from '../FieldTextForm/FieldTextForm';
import FormDataUser from '../FormDataUser/FormDataUser';
// import { changeDataUser } from '../../api/changeDataUser';
import { updateDataUser } from '../../store/slices/getLoggedUserSlices';

function FormChangeData({ user }) {
  const dispatch = useDispatch();
  const {
    login, firstName, lastName, email, birthdate,
  } = user;
  const initialValueUser = {
    login, firstName, lastName, email, birthdate,
  };
  console.log(initialValueUser);
  const validationSchemaUser = Yup.object().shape({
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

  });
  return (

    <Formik
      initialValues={initialValueUser}
      validationSchema={validationSchemaUser}
      onSubmit={(values) => {
        console.log(values);
        dispatch(updateDataUser(values));
      }}
      enableReinitialize
    >
      {({ isValid }) => (
        <FormDataUser isValid={isValid} />
        // <Form>
        //   <FieldTextForm name="firstName" title="First Name" />
        //   <FieldTextForm name="lastName" title="Last Name" />
        //   <FieldTextForm name="login" title="Login" />
        //   <FieldTextForm name="birthdate" title="Birth Date" />
        //   <FieldTextForm name="email" title="Email" />
        //   <FieldTextForm name="telephone" title="Telephone" />
        //   <button
        //     disabled={!isValid}
        //     type="submit"
        //     className={styles.btnSubmit}
        //   >
        //     Submit
        //   </button>
        //
        // </Form>
      )}
    </Formik>

  );
}
export default FormChangeData;
