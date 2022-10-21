import { NavLink } from 'react-router-dom'

function NavigationIconMenu({
  basket, catalog, main, style
}) {
  return (
    <nav>
      <ul>
        <li className={`${style}`}>
          <NavLink to="/">{main}</NavLink>
        </li>
        <li className={`${style}`}>
          <NavLink to="/catalog">{catalog}</NavLink>
        </li>

        <li className={`${style}`}>
          <NavLink to="/basket">{basket}</NavLink>
        </li>
      </ul>

    </nav>
  )
}
export default NavigationIconMenu
