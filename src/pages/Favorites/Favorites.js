import { CarsItem } from 'components/CarsItem/CarsItem';
import { CarModal } from 'components/CarModal/CarModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/thunks';
const { useEffect, useState } = require('react');

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);
  const favorites = useSelector(state => state.favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);

  useEffect(() => {
    dispatch(getCarsThunk({ page: 1, limit: 32 }));
  }, [dispatch]);

  const toggleModal = event => {
    setIsModalOpen(state => !state);

    setCurrentCar(
      cars.filter(car => car.id.toString() === event.currentTarget.id)
    );
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') setIsModalOpen(false);
  };
  const favoriteCars = cars.filter(car => favorites.includes(car.id));
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        <CarsItem cars={favoriteCars} toggleModal={toggleModal} />
      </ul>
      {isModalOpen && (
        <CarModal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

