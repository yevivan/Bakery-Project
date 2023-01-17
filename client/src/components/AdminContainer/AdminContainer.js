import FormAddProduct from '../FormAddProduct/FormAddProduct';
import styles from './AdminContainer.module.scss';
import FormUpdateProduct from '../FormUpdateProduct/FormUpdateProduct';
import ContainerUpdateProduct from '../ContainerUpdateProduct/ContainerUpdateProduct';

function AdminContainer() {
  return (
    <div className={styles.container}>
      <FormAddProduct />
      <ContainerUpdateProduct />
    </div>

  );
}
export default AdminContainer;
