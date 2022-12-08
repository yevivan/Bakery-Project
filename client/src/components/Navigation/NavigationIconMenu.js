import { NavLink } from 'react-router-dom';

function NavigationIconMenu({
<<<<<<< HEAD
  basket, searchList, main, style,
=======
  basket, catalog, main, style, account,
>>>>>>> af1ed4d1e75c4a54dda7b81159f22ea005019409
}) {
  return (
    <nav>
      <ul>
        <li className={`${style}`}>
          <NavLink to="/">{main}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/search">{searchList}</NavLink>
        </li>

        <li className={`${style}`}>
          <NavLink to="/basket">{basket}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/account">{account}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationIconMenu;
