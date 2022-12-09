import { NavLink } from 'react-router-dom';

function NavigationIconMenu({

  basket, searchList, main, style, account,

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
