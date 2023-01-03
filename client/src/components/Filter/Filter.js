/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styles from './Filter.module.scss';
import { addAllFilter } from '../../store/slices/filterSlices';

function Filter() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValues = useSelector((state) => state.filter.filter);
  const [category, setCategory] = useState(false);
  const openCategory = () => {
    setCategory((prev) => !prev);
  };
  const [choco, setChoco] = useState(false);
  const openChoco = () => {
    setChoco((prev) => !prev);
  };
  const [sugars, setSugars] = useState(false);
  const openSugars = () => {
    setSugars((prev) => !prev);
  };
  const [nutss, setNutss] = useState(false);
  const openNutss = () => {
    setNutss((prev) => !prev);
  };
  const [sizes, setSizes] = useState(false);
  const openSizes = () => {
    setSizes((prev) => !prev);
  };
  return (
    <div className={styles.filterContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addAllFilter(values));
          setSearchParams(values);
        }}
        enableReinitialize
      >

        {() => (
          <Form>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openCategory())}>
                <p className={styles.text}>
                  Categories
                </p>
                <div className={styles.divBtn}>{category ? '-' : '+'}</div>
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={category ? { display: 'block' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="categories"
                    value="cake"
                  />
                  Cake
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="categories"
                    value="cheesecake"
                  />
                  Cheesecake
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="categories"
                    value="tarts"
                  />
                  Tarts
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="categories"
                    value="Pastries"
                  />
                  Pastries
                </label>
              </li>
            </ul>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openChoco())}>
                <p className={styles.text}>
                  Chocolate
                </p>
                <div className={styles.divBtn}>{choco ? '-' : '+'}</div>
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={choco ? { display: 'block' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="chocolate"
                    value="true"
                  />
                  With
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="chocolate"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openSugars())}>
                <p className={styles.text}>
                  Sugar
                </p>
                <div className={styles.divBtn}>{sugars ? '-' : '+'}</div>
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={sugars ? { display: 'block' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="sugar"
                    value="true"
                  />
                  With
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="sugar"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openNutss())}>
                <p className={styles.text}>
                  Nuts
                </p>
                <div className={styles.divBtn}>{nutss ? '-' : '+'}</div>
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={nutss ? { display: 'block' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="nuts"
                    value="true"
                  />
                  With
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="nuts"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openSizes())}>
                <p className={styles.text}>
                  Size
                </p>
                <div className={styles.divBtn}>{sizes ? '-' : '+'}</div>
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={sizes ? { display: 'block' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="size"
                    value="small"
                  />
                  Small
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="size"
                    value="medium"
                  />
                  Medium
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    type="checkbox"
                    name="size"
                    value="large"
                  />
                  Large
                </label>
              </li>
            </ul>
            <button className={styles.submitBtn} type="submit">Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
}
export default Filter;
