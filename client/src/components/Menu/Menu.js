import Navigation from '../Navigation/NavigationMenu';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <div className={styles.menu}>
      <Navigation
        catalog={
          <p>весь каталог/веде на масив всіх item</p>
                }
        category1={
          <p>категорія</p>
        }
        category2={
          <p>категорія</p>
        }
        category3={
          <p>категорія</p>
        }
        category4={
          <p>категорія</p>
        }
      />
    </div>

  );
}
export default Menu;
