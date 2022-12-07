import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function NavigationMenu({
  catalog,
  cake,
  cheesecake,
  tarts,
  pastries,
  currentProduct,
  style,
}) {
  // const dispatch = useDispatch();
  // const arr = [
  //   {
  //     categories: 'cake',
  //     name: 'Cake',
  //   },
  //   {
  //     categories: 'tarts',
  //     name: 'Tarts',
  //   },
  // ];
  return (

    <nav>

      <ul>
        {/* {arr.map(({ categories, name }) => ( */}
        {/*  <li> */}
        {/*    <NavLink */}
        {/*    // onClick={dispatch(changeFilterCategory({ categories }))} */}
        {/*      to={`/products?categories=${categories}`} */}
        {/*    > */}
        {/*      {name} */}
        {/*    </NavLink> */}
        {/*  </li> */}
        {/* ))} */}
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

    </nav>
  );
}
export default NavigationMenu;
