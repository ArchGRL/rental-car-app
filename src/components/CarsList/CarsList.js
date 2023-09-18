import { useDispatch, useSelector } from 'react-redux';
import { CarsItem } from 'components/CarsItem/CarsItem';
import { CarModal } from 'components/CarModal/CarModal';
import { getCarsAPI } from 'redux/cars/thunks';
import css from './CarsList.module.css';

const { useEffect, useState } = require('react');

export const CarsList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);

  const dispatch = useDispatch();
  const endOfCardsList = useSelector(state => state.cars.isEndOfCards);
  const cars = useSelector(state => state.cars.cars);

  useEffect(() => {
    dispatch(getCarsAPI({ page: pageNumber }));
  }, [dispatch, pageNumber]);

  const toggleModal = event => {
    setIsModalOpen(state => !state);
    setCurrentCar(
      cars.filter(car => car.id.toString() === event.currentTarget.id)
    );
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') setIsModalOpen(false);
  };
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <ul className={css.carList}>
        <CarsItem cars={cars} toggleModal={toggleModal} />
      </ul>
      {CarsItem && !endOfCardsList && (
        <button
          className={css.loadMore}
          type="button"
          onClick={() => setPageNumber(state => state + 1)}
        >
          Load more
        </button>
      )}
      {isModalOpen && (
        <CarModal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};
