import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import '../../images/Rental_Car.png';

export const HomePage = () => {
  const location = useLocation();
  return (
    <section className={css.hero}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>Explore Our Fleet of Сomfortable Cars</h1>
        <NavLink
          className={css.navLinkPrimary}
          to="/catalog"
          style={location.pathname === '/catalog' ? { color: 'blue' } : {}}
        >
          Find a Car
        </NavLink>
        <div className={css.heroDescriptionWrap}>
          <p className={css.heroDescription}>
            Discover the perfect car for your journey. From luxury sedans to
            spacious SUVs, we have a car for every occasion.
          </p>
        </div>
      </div>
    </section>
  );
};
