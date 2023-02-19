import React from 'react';
import { Field } from 'formik';
import styles from '../FormAddProduct/FormAddProduct.module.scss';

function FieldRadioForm({ name, title }) {
  return (
    <div className={styles.blockRadio}>
      <div className={styles.blockFieldTitle}>
        <p className={styles.fieldTitle}>{title}</p>
      </div>

      <ul
        className={styles.filterBlock}
        role="group"
        aria-labelledby="my-radio-group"
      >
        <li className={styles.filterItem}>
          <label>
            <Field
              className={styles.checkboxCake}
              type="radio"
              name={name}
              value="true"
            />
            <p className={styles.radioText}>Yes</p>
            {/* <section className={styles.checkCake} /> */}
          </label>
        </li>
        <li className={styles.filterItem}>
          <label>
            <Field
              className={styles.checkboxCheese}
              type="radio"
              name={name}
              value="false"
            />
            <p className={styles.radioText}>No</p>
            {/* <section className={styles.checkCheese} /> */}
          </label>
        </li>
      </ul>
    </div>
  );
}
export default FieldRadioForm;
