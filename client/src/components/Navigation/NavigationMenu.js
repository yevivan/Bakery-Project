import { NavLink } from 'react-router-dom';

function NavigationMenu({
  catalog,
  cake,
  cheesecake,
  tarts,
  pastries,
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
          <NavLink to="/products?categories=cake">{cake}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=cheesecake">{cheesecake}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=tarts">{tarts}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=Pastries">{pastries}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products/:id">{currentProduct}</NavLink>
        </li>
      </ul>
      {/* <ul> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog">{catalog}</NavLink> */}
      {/*  </li> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog/category1">{category1}</NavLink> */}
      {/*  </li> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog/category2">{category2}</NavLink> */}
      {/*  </li> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog/category3">{category3}</NavLink> */}
      {/*  </li> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog/category3">{category4}</NavLink> */}
      {/*  </li> */}
      {/*  <li className={`${style}`}> */}
      {/*    <NavLink to="/catalog/current_product">{currentProduct}</NavLink> */}
      {/*  </li> */}
      {/* </ul> */}
    </nav>
  );
}
export default NavigationMenu;
