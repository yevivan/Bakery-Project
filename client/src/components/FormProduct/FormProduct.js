import { Field, Form } from 'formik';
import React from 'react';
import styles from './FormProduct.module.scss';
import FieldTextForm from '../FieldTextForm/FieldTextForm';
import FieldRadioForm from '../FieldRadioForm/FieldRadioForm';
// import { addNewProduct } from '../../api/addNewProduct';

function FormProduct({ isValid }) {
  return (
    <Form className={styles.form}>
      <FieldTextForm name="name" title="Product`s name" />
      <FieldTextForm name="currentPrice" title="Actual price" />
      <FieldTextForm name="previousPrice" title="Previous price" />
      <FieldTextForm name="quantity" title="Quantity" />
      <FieldTextForm name="itemNo" title="ItemNo" />
      <FieldTextForm name="imageUrls" title="Image`s URL" />
      <FieldTextForm name="description" title="Description" />
      <FieldTextForm name="type" title="Type" />

      <div className={styles.block}>
        <p className={styles.fieldTitle}>Categories</p>
        <ul
          className={styles.filterBlock}
          role="group"
          aria-labelledby="my-radio-group"
        >
          <li className={styles.filterItem}>
            <label htmlFor="categories">
              <Field
                className={styles.checkboxCake}
                type="radio"
                name="categories"
                value="cake"
              />
              <p className={styles.radioText}>Cake</p>

            </label>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="categories">
              <Field
                className={styles.checkboxCheese}
                type="radio"
                name="categories"
                value="cheesecake"
              />
              <p className={styles.radioText}>Cheesecake</p>

            </label>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="categories">
              <Field
                className={styles.checkboxTarts}
                type="radio"
                name="categories"
                value="tarts"
              />
              <p className={styles.radioText}>Tarts</p>

            </label>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="categories">
              <Field
                className={styles.checkboxPastries}
                type="radio"
                name="categories"
                value="pastries"
              />
              <p className={styles.radioText}>Pastries</p>
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.containerRadio}>
        <FieldRadioForm name="chocolate" title="Chocolate" />
        <FieldRadioForm name="berries" title="Berries" />
        <FieldRadioForm name="fruits" title="Fruits" />
        <FieldRadioForm name="caramel" title="Caramel" />
        <FieldRadioForm name="nuts" title="Nuts" />
        <FieldRadioForm name="sugar" title="Sugar" />
        <FieldRadioForm name="new" title="New" />
        <FieldRadioForm name="isPopular" title="Popular" />
      </div>

      <div className={styles.block}>
        <p className={styles.fieldTitle}>Size</p>
        <ul
          className={styles.filterBlock}
          role="group"
          aria-labelledby="my-radio-group"
        >
          <li className={styles.filterItem}>
            <label htmlFor="size">
              <Field
                className={styles.checkboxCake}
                type="radio"
                name="size"
                value="small"
              />
              <p className={styles.radioText}>Small</p>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="size">
              <Field
                className={styles.checkboxCheese}
                type="radio"
                name="size"
                value="medium"
              />
              <p className={styles.radioText}>Medium</p>
            </label>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="size">
              <Field
                className={styles.checkboxTarts}
                type="radio"
                name="size"
                value="large"
              />
              <p className={styles.radioText}>Large</p>

            </label>
          </li>
        </ul>
      </div>

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
export default FormProduct;
