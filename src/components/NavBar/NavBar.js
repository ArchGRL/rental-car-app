import { NavLink, useLocation } from 'react-router-dom';
import css from './NavBar.module.css';

export const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={css.navBar}>
      <NavLink
        className={css.navLink}
        exact
        to="/"
        style={location.pathname === '/' ? { color: 'blue' } : {}}
      >
        Home
      </NavLink>
      <div className={css.navBarCar}>
        <NavLink
          className={css.navLink}
          to="/catalog"
          style={location.pathname === '/catalog' ? { color: 'blue' } : {}}
        >
          Catalog
        </NavLink>
        <NavLink
          className={css.navLink}
          to="/favorites"
          style={location.pathname === '/favorites' ? { color: 'blue' } : {}}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};
