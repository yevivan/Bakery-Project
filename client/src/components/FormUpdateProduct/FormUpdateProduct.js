import { useDispatch } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';

import { Formik } from 'formik';

import { updateProduct } from '../../api/updateProduct';
import FormProduct from '../FormProduct/FormProduct';

function FormUpdateProduct({ dataItem }) {
  const dispatch = useDispatch();
  const initialValuesNewProduct = dataItem;
  console.log(dataItem);

  const validationSchemaNewProduct = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Min 2 symbols')
      .max(40, 'Max 20 symbols')
      .required('Required'),
    currentPrice: Yup.number()
      .min(0, 'Min 0')
      .max(10000, 'Max 10000 ')
      .required('Required'),
    previousPrice: Yup.number()
      .min(0, 'Min 0')
      .max(10000, 'Max 10000')
      .required('Required'),
    quantity: Yup.number()
      .min(1, 'Min 1')
      .max(99, 'Max 2')
      .required('Required'),
    itemNo: Yup.number()
      .max(999999, 'Max 6 symbols')
      .required('Required'),

  });
  return (

    <Formik
      initialValues={initialValuesNewProduct}
      validationSchema={validationSchemaNewProduct}
      onSubmit={(
        values,
        { resetForm },
      ) => {
        console.log(values);
        dispatch(updateProduct(values));
        resetForm();
      }}
      enableReinitialize
    >

      {({ isValid }) => (
        <FormProduct isValid={isValid} />
      )}

    </Formik>

  );
}
export default FormUpdateProduct;
