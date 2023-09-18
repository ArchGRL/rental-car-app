import { Link } from 'react-router-dom';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={css.navBar}>
      <Link className={css.navLink} to="/">Home</Link>
      <div className={css.navBarCar}>
      <Link className={css.navLink} to="/catalog">Catalog</Link>
      <Link className={css.navLink} to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};