import {
  AddToFavorite,
  DeleteFromFavorite,
} from '../../redux/favorites/actions';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import css from './CarsItem.module.css';

const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = ({ toggleModal, cars }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  return cars.map(car => {
    const {
      id,
      make,
      model,
      year,
      type,
      mileage,
      img,
      rentalPrice,
      rentalCompany,
      address,
    } = car;
    const adressArray = address.split(', ');
    const newAdresses = adressArray.slice(1);
    return (
      <li key={id} className={css.carCard}>
        <div className={css.imgThumb}>
          <div>
            <div className={css.carImgContainer}>
              <img className={css.carImg} alt={model} src={img} crop="fill" />
            </div>

            {favorites && favorites?.includes(id) ? (
              <button
                className={css.deleteFavoriteBtn}
                type="button"
                id={id}
                onClick={() => dispatch(DeleteFromFavorite(id))}
              >
                <FaHeart />
              </button>
            ) : (
              <button
                className={css.addFavoriteBtn}
                type="button"
                id={id}
                onClick={() => dispatch(AddToFavorite(id))}
              >
                <FaRegHeart />
              </button>
            )}
          </div>
          <div>
            <div className={css.cardTitleWrap}>
              <p>
                {make}
                <span className={css.cardTitleSpan}>{model}</span>, {year}
              </p>
              <p>{rentalPrice}</p>
            </div>

            <ul className={css.baseInfCard}>
              {newAdresses.map((newAdress, index) => (
                <li key={index}>{newAdress}</li>
              ))}
              <li>{rentalCompany}</li>
            </ul>

            <ul className={css.baseInfCard}>
              <li>{type}</li>
              <li>{mileage}</li>
            </ul>
          </div>
        </div>
        <button
          className={css.learnMoreBtn}
          type="button"
          id={id}
          onClick={toggleModal}
        >
          Learn more
        </button>
      </li>
    );
  });
};
