import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from '../Navigation/NavigationMenu';
import styles from './Menu.module.scss';

function Menu() {
  return (

    <>
      <MenuIcon className={styles.burgerMenu} />
      <CloseIcon className={styles.burgerMenuClose} />
      <div className={styles.menu}>
        <Navigation

          catalog={<p>All products</p>}// go to /products
          cake={<p>Cake</p>}// go to /products?category=category1
          cheesecake={<p>Cheesecake</p>}// go to /products?category=category2
          tarts={<p>Tarts</p>}
          pastries={<p>Pastries</p>}


        />
        {/* <Navigation */}
        {/*    catalog={<p>All item</p>}// go to /products */}

        {/*    category1={<p>category1</p>}// go to /products?category=category1 */}
        {/*    category2={<p>category2</p>}// go to /products?category=category2 */}
        {/*    category3={<p>category3</p>} */}
        {/*    category4={<p>category4</p>} */}

        {/* /> */}
      </div>
    </>

  );
}
export default Menu;
