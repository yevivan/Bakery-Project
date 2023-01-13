import FormAddProduct from "../FormAddProduct/FormAddProduct";
import styles from './AdminContainer.module.scss'

function AdminContainer(){

    return(
        <div className={styles.container}>
            <button className={styles.btnAdd} type='button'>Add New Product</button>
            <FormAddProduct/>
        </div>

    )
}
export default AdminContainer;