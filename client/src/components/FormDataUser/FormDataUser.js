import { Form } from 'formik';
import FieldTextForm from '../FieldTextForm/FieldTextForm';
import styles from '../FormProduct/FormProduct.module.scss';

function FormDataUser({ isValid }) {
  return (
    <Form className={styles.form}>
      <FieldTextForm name="firstName" title="First Name" />
      <FieldTextForm name="lastName" title="Last Name" />
      <FieldTextForm name="login" title="Login" />
      <FieldTextForm name="birthdate" title="Birth Date" />
      <FieldTextForm name="email" title="Email" />
      {/* <FieldTextForm name="telephone" title="Telephone" /> */}
      <button
        disabled={!isValid}
        type="submit"
        className={styles.btnSubmit}
      >
        Submit
      </button>

    </Form>
  );
}
export default FormDataUser;
