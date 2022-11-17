import { NavLink } from 'react-router-dom';

function NavigationMenu({
  catalog,
  category1,
  category2,
  category3,
  category4,
  currentProduct,
  style,
}) {
  return (
    <nav>
      <ul>
        <li className={`${style}`}>
          <NavLink to="/products">{catalog}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/catalog/category1">{category1}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/catalog/category2">{category2}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/catalog/category3">{category3}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/catalog/category3">{category4}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products/:id">{currentProduct}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationMenu;
