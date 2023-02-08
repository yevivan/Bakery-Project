import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function NavigationMenu({
  catalog,
  cake,
  cheesecake,
  tarts,
  pastries,
  // currentProduct,
  style,
  styleMenu,
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

      <ul className={`${styleMenu}`}>
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
          <NavLink to="/products?&perPage=8&startPage=1">{catalog}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=cake&perPage=8&startPage=1">{cake}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=cheesecake&perPage=8&startPage=1">{cheesecake}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=tarts&perPage=8&startPage=1">{tarts}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/products?categories=Pastries&perPage=8&startPage=1">{pastries}</NavLink>
        </li>
        {/* <li className={`${style}`}> */}
        {/*  <NavLink to="/products/:id">{currentProduct}</NavLink> */}
        {/* </li> */}
      </ul>

    </nav>
  );
}
export default NavigationMenu;
