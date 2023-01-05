/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';
import styles from './Filter.module.scss';
import { addAllFilter } from '../../store/slices/filterSlices';
import ButtonComponent from '../Button/ButtonComponent';

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
  const [showFilter, setShowFilter] = useState(false);
  function openFilter() { setShowFilter((prev) => !prev); }
  // console.log(searchParams.get('categories'))
  return (
    <div className={styles.filterContainer}>
      <button className={styles.btnFilter} type="button" onClick={openFilter}><TuneIcon style={{ color: '#f09ec4', fontSize: '30' }} /></button>
      <h4 className={styles.title}>Filter by</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addAllFilter(values));
          console.log(values);

          setSearchParams(values);
        }}
        enableReinitialize
      >

        {() => (

          <Form className={showFilter ? styles.formActive : styles.form}>
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openCategory())}>
                <div>
                  <p className={styles.text}>
                    Categories
                  </p>
                </div>
                {/* <div className={styles.divBtn}>{category ? '-' : <AddIcon style={{ fontSize: 'large', color: '#f09ec4' }} />}</div> */}
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={category ? { display: 'flex' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label className={styles.label} htmlFor="cake">
                  <Field
                    className={styles.checkbox}
                    type="checkbox"
                    name="categories"
                    value="cake"
                    id="cake"
                  />
                  Cake
                </label>
              </li>
              <li className={styles.filterItem}>
                <label>
                  <Field
                    className={styles.checkbox}
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
                    className={styles.checkbox}
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
                    className={styles.checkbox}
                    type="checkbox"
                    name="categories"
                    value="Pastries"
                  />
                  Pastries
                </label>
              </li>
            </ul>
            <hr className={styles.line} />
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openChoco())}>
                <p className={styles.text}>
                  Chocolate
                </p>
                {/* <div className={styles.divBtn}>{choco ? '-' : <img src={chocolateIcon} alt="choco" />}</div> */}
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={choco ? { display: 'flex' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    className={styles.checkbox}
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
                    className={styles.checkbox}
                    type="checkbox"
                    name="chocolate"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <hr className={styles.line} />
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openSugars())}>
                <p className={styles.text}>
                  Sugar
                </p>
                {/* <div className={styles.divBtn}>{sugars ? '-' : '+'}</div> */}
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={sugars ? { display: 'flex' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    className={styles.checkbox}
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
                    className={styles.checkbox}
                    type="checkbox"
                    name="sugar"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <hr className={styles.line} />
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openNutss())}>
                <p className={styles.text}>
                  Nuts
                </p>
                {/* <div className={styles.divBtn}>{nutss ? '-' : '+'}</div> */}
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={nutss ? { display: 'flex' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    className={styles.checkbox}
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
                    className={styles.checkbox}
                    type="checkbox"
                    name="nuts"
                    value="false"
                  />
                  WithOut
                </label>
              </li>
            </ul>
            <hr className={styles.line} />
            <div id="checkbox-group">
              <button className={styles.button} type="button" onClick={() => (openSizes())}>
                <p className={styles.text}>
                  Size
                </p>
                {/* <div className={styles.divBtn}>{sizes ? '-' : '+'}</div> */}
              </button>
            </div>
            <ul
              className={styles.filterBlock}
              role="group"
              aria-labelledby="checkbox-group"
              style={sizes ? { display: 'flex' } : { display: 'none' }}
            >
              <li className={styles.filterItem}>
                <label>
                  <Field
                    className={styles.checkbox}
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
                    className={styles.checkbox}
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
                    className={styles.checkbox}
                    type="checkbox"
                    name="size"
                    value="large"
                  />
                  Large
                </label>
              </li>
            </ul>
            <hr className={styles.line} />
            <ButtonComponent type="submit" text="Submit" style={{ marginTop: '50px', minWidth: '100%' }} />
          </Form>
        )}

      </Formik>
    </div>

  );
}
export default Filter;
