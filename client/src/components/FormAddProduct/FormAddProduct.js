import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import styles from './FormAddProduct.module.scss';
// import FieldTextForm from '../FieldTextForm/FieldTextForm';
// import FieldRadioForm from '../FieldRadioForm/FieldRadioForm';
import { addNewProduct } from '../../api/addNewProduct';
import FormProduct from '../FormProduct/FormProduct';

function FormAddProduct() {
  const dispatch = useDispatch();
  const [isForm, setIsForm] = useState(false);
  function showForm() { setIsForm((prev) => !prev); }
  const initialValuesNewProduct = {
    name: '',
    currentPrice: '',
    previousPrice: '',
    categories: '',
    imageUrls: [],
    quantity: '',
    description: '',
    type: '',
    chocolate: '',
    berries: '',
    fruits: '',
    caramel: '',
    nuts: '',
    size: '',
    sugar: '',
    new: '',
    isPopular: '',
    itemNo: '',

  };
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
      .min(100000, 'Min 6 symbols')
      .max(999999, 'Max 6 symbols')
      .required('Required'),
  });
  return (
    <>
      <button className={styles.btnAdd} onClick={showForm} type="button">{isForm ? <CloseIcon style={{ color: '#391113', fontSize: '25', fontWeight: '300' }} /> : 'Add New Product'}</button>
      {/* <FormProduct isForm={isForm}/> */}
      {isForm && (
      <Formik
        initialValues={initialValuesNewProduct}
        validationSchema={validationSchemaNewProduct}
        onSubmit={(
          values,
          { resetForm },
        ) => {
          console.log(values);
          dispatch(addNewProduct(values));
          resetForm();
        }}
      >

        {({ isValid }) => (
          <FormProduct isValid={isValid} />

        )}

      </Formik>
      )}
    </>
  );
}
export default FormAddProduct;
