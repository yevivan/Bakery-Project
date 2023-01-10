import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
import React from "react";
import styles from "../FormAddProduct/FormAddProduct.module.scss";


function FormAddProduct(){
    const initialValuesNewProduct = {
        name: '',
        currentPrice: '',
        previousPrice: '',
        categories: '',
        imageUrls: '',
        quantity: '',
        description: '',
        type: '',
        chocolate:'',
        berries: '',
        fruits: '',
        caramel: '',
        nuts: '',
        size: '',
        sugar: '',
        new: '',
        isPopular: '',
        itemNo: "010101",
        date: ""
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
        quantity: Yup.string()
            .min(10, 'Min 2 symbols')
            .required('Required')
            .required('Required'),

    });
    return(
        <Formik
            initialValues = {initialValuesNewProduct}
            validationSchema = {validationSchemaNewProduct}
            onSubmit = {(values, {resetForm})=>{
                console.log(values)
                resetForm()
            }}
        >


            {({ isValid })   =>

                (
                    <Form className={styles.form}>

                        <label htmlFor="name" className={styles.fieldTitle}>Product`s name</label>
                        <Field className={styles.field}
                            type="text"
                            name="name"
                            placeholder="Product`s name"
                        />
                        {/*<ErrorMessage name = "name">{msg=> <span className={styles.error}>{msg}</span>}</ErrorMessage>*/}
                        <label htmlFor="currentPrice" className={styles.fieldTitle}>Actual price</label>
                        <Field className={styles.field}
                            type="text"
                            name="currentPrice"
                            placeholder="Actual price"
                        />
                        {/*<ErrorMessage name = "quantity">{msg=> <span className={styles.error}>{msg}</span>}</ErrorMessage>*/}
                        {/*<label htmlFor="quantity">Actual price</label>*/}
                        {/*<Field className={styles.field}*/}
                        {/*    type="text"*/}
                        {/*    name="currentPrice"*/}
                        {/*    placeholder="Actual price"*/}
                        {/*/>*/}
                        {/*<ErrorMessage name = "age">{msg=> <span className={styles.error}>{msg}</span>}</ErrorMessage>*/}
                        <label htmlFor="previousPrice" className={styles.fieldTitle}>Previous price</label>
                        <Field className={styles.field}
                            type="text"
                            name="previousPrice"
                            placeholder="Previous price"
                        />
                        <label htmlFor="quantity" className={styles.fieldTitle}>Quantity</label>
                        <Field className={styles.field}
                            type="text"
                            name="quantity"
                            placeholder="Quantity"
                        />
                        {/*<ErrorMessage name = "previousPrice">{msg=> <span className={styles.error}>{msg}</span>}</ErrorMessage>*/}
                        <label htmlFor="imageUrls"className={styles.fieldTitle}>Image</label>
                        <Field className={styles.field}
                               type="text"
                               name="imageUrls"
                               placeholder="Image`s URL"
                        />
                        <label htmlFor="description"className={styles.fieldTitle}>Description</label>
                        <Field className={styles.field}
                               type="text"
                               name="description"
                               placeholder="Description"
                        />
                        <p className={styles.fieldTitle}>Type</p>
                        <ul
                            className={styles.filterBlock}
                            role="group"
                            aria-labelledby="my-radio-group"
                            // style={category ? { display: 'flex' } : { display: 'none' }}
                        >
                            <li className={styles.filterItem}>
                                <label >
                                    <Field
                                        className={styles.checkboxCake}
                                        type="radio"
                                        name="categories"
                                        value="cake"
                                    />
                                    <p className={styles.radioText}>Cake</p>
                                    <section className={styles.checkCake} />
                                </label>
                            </li>
                            <li className={styles.filterItem}>
                                <label>
                                    <Field
                                        className={styles.checkboxCheese}
                                        type="radio"
                                        name="categories"
                                        value="cheesecake"
                                    />
                                   <p className={styles.radioText}>Cheesecake</p>
                                    <section className={styles.checkCheese} />
                                </label>
                            </li>
                            <li className={styles.filterItem}>
                                <label>
                                    <Field
                                        className={styles.checkboxTarts}
                                        type="radio"
                                        name="categories"
                                        value="tarts"
                                    />
                                    <p className={styles.radioText}>Tarts</p>
                                    <section className={styles.checkTarts} />
                                </label>
                            </li>
                            <li className={styles.filterItem}>
                                <label>
                                    <Field
                                        className={styles.checkboxPastries}
                                        type="radio"
                                        name="categories"
                                        value="Pastries"
                                    />
                                    <p className={styles.radioText}>Pastries</p>
                                    <section className={styles.checkPastries} />
                                </label>
                            </li>
                        </ul>
                        <ul
                            className={styles.filterBlock}
                            role="group"
                            aria-labelledby="my-radio-group"
                            // style={category ? { display: 'flex' } : { display: 'none' }}
                        >
                            <li className={styles.filterItem}>
                                <label >
                                    <Field
                                        className={styles.checkboxCake}
                                        type="radio"
                                        name="categories"
                                        value="cake"
                                    />
                                    <p className={styles.radioText}>Cake</p>
                                    <section className={styles.checkCake} />
                                </label>
                            </li>
                            <li className={styles.filterItem}>
                                <label>
                                    <Field
                                        className={styles.checkboxCheese}
                                        type="radio"
                                        name="categories"
                                        value="cheesecake"
                                    />
                                    <p className={styles.radioText}>Cheesecake</p>
                                    <section className={styles.checkCheese} />
                                </label>
                            </li>
                        </ul>




                        <Field
                            type="text"
                            name="phone"
                            placeholder="Контактний номер"
                        />
                        {/*<ErrorMessage name = "phone">{msg=> <span className={styles.error}>{msg}</span>}</ErrorMessage>*/}

                        <button
                            disabled = {!isValid}
                            type="submit"
                            className={styles.btnSubmit}
                            // style={styles.btnSubmit}
                            // onClick={()=>{dispatch(submitOrder(props.values, order))}}
                        >ВІДПРАВИТИ</button>
                    </Form>
                )
            }


        </Formik>
    )
}
export default FormAddProduct;