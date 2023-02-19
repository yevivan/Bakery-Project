import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FieldTextForm from '../FieldTextForm/FieldTextForm';
import styles from '../FormProduct/FormProduct.module.scss';

function Order({ dataOrder }) {
  const initialValuesOrder = dataOrder;
  const validationSchemaOrder = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(40, 'Max 20 symbols')
      .required('Required'),
  });
  return (
    <Formik
      initialValues={initialValuesOrder}
      validationSchema={validationSchemaOrder}
      onSubmit={(values) => console.log(values)}
      enableReinitialize
    >
      {({ isValid }) => (
        <Form>
          <FieldTextForm name="email" title="email" />
          <FieldTextForm name="mobile" title="mobile" />
          <FieldTextForm name="deliveryAddress" title="address" />
          <button
            disabled={!isValid}
            type="submit"
            className={styles.btnSubmit}
          >
            Submit
          </button>

        </Form>

      )}
    </Formik>
  );
}
export default Order;
