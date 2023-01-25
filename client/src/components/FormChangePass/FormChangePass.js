import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import styles from '../FormProduct/FormProduct.module.scss';
import FieldTextForm from '../FieldTextForm/FieldTextForm';
import { changePass } from '../../api/changePass';

function FormChangePass() {
  const dispatch = useDispatch();
  const initialValuePass = {
    password: '',
    newPassword: '',
  };
  const validationSchemaPass = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Must be longer than 8 characters')
      .required('Required'),
    newPassword: Yup.string()
      .min(8, 'Must be longer than 8 characters')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={initialValuePass}
      validationSchema={validationSchemaPass}
      onSubmit={(values) => {
        console.log(values);
        dispatch(changePass(values));
      }}
    >
      {({ isValid }) => (
        <Form className={styles.form}>
          <FieldTextForm name="password" title="Password" />
          <FieldTextForm name="newPassword" title="New Password" />
          <button
            className={styles.btnSubmit}
            disabled={!isValid}
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>

  );
}
export default FormChangePass;
