import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from '../FormAddProduct/FormAddProduct.module.scss';

function FieldTextForm({ name, title }) {
  return (
    <>
      <label htmlFor={name} className={styles.fieldTitle}>{title}</label>
      <Field
        className={styles.field}
        type="text"
        name={name}
        placeholder={title}
      />
      <ErrorMessage name={name}>{(msg) => <span className={styles.error}>{msg}</span>}</ErrorMessage>
    </>
  );
}
export default FieldTextForm;
