import { AddToFavorite, DeleteFromFavorite } from '../../redux/favorites/actions';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import css from './CarsItem.module.css';

const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = ({ toggleModal, cars }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  return cars.map(car => {
    const { id, make, model, year, type, mileage, img, rentalPrice } = car;
    return (
      <li key={id} className={css.carCard}>
        <div className={css.imgThumb}>
          <div className={css.carImgContainer}>
          <img className={css.carImg} alt={model} src={img} crop='fill' />
          </div>
          
          {favorites && favorites?.includes(id) ? (
            <button
            className={css.deleteFavoriteBtn}
              type="button"
              id={id}
              onClick={() => dispatch(DeleteFromFavorite(id))}
            >
              <FaHeart/>
            </button>
          ) : (
            <button
            className={css.addFavoriteBtn}
              type="button"
              id={id}
              onClick={() => dispatch(AddToFavorite(id))}
            >
              <FaRegHeart/>
            </button>
          )}
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <p>{make}</p>
          <p>{model},</p>
          <p>{year}</p>
          <p>{rentalPrice}</p>
          <p>{type}</p>
          <p>{mileage}</p>
        </div>
        <button type="button" id={id} onClick={toggleModal}>
          Learn more
        </button>
      </li>
    );
  });
};