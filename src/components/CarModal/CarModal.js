import { FaTimes } from 'react-icons/fa';
import css from './CarModal.module.css';

export const CarModal = ({ card, setIsModalOpen }) => {
  const {
    id,
    make,
    model,
    year,
    type,
    mileage,
    img,
    rentalPrice,
    description,
    accessories,
    functionalities,
    rentalConditions,
    address,
    fuelConsumption,
    engineSize,
  } = card[0];

  const conditionsArray = rentalConditions.split('\n');
  const formattedMileage = mileage.toLocaleString();
  const adressArray = address.split(', ');
  const newAdresses = adressArray.slice(1);

  const handleBackdropClick = event => {
    if (event.target.id !== 'backdrop') return;
    setIsModalOpen(false);
  };

  const handleCloseModal = event => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={css.modalBackdrop}
      onClick={handleBackdropClick}
      id="backdrop"
    >
      <div className={css.modal} key={id} id="modal">
        <button className={css.closeButton} onClick={handleCloseModal}>
          <FaTimes />
        </button>
        <div className={css.modalImgThumb}>
          <img className={css.modalImg} src={img} alt={model} />
        </div>

        <p className={css.modalTitle}>
          {make}
          <span className={css.modalSpan}>{model}</span>, {year}
        </p>

        <ul className={css.baseInf}>
          {newAdresses.map((newAdress, index) => (
            <li key={index}>{newAdress}</li>
          ))}
          <li>Id:{id}</li>
          <li>Year:{year}</li>
          <li className={css.type}>Type:{type}</li>
        </ul>

        <ul className={css.baseInfPlus}>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li className={css.type}>Engine Size: {engineSize}</li>
        </ul>

        <p className={css.description}>{description}</p>

        <p className={css.asFn}>Accessories and functionalities:</p>
        <ul className={css.accessories}>
          {accessories.map((accessory, index) => (
            <li key={index}>{accessory}</li>
          ))}
        </ul>

        <ul className={css.functionalities}>
          {functionalities.map((functionality, index) => (
            <li key={index}>{functionality}</li>
          ))}
        </ul>

        <p className={css.asFn}>Rental Conditions:</p>
        <ul className={css.conditions}>
          {conditionsArray.map((condition, index) => (
            <li className={css.conditionsLi} key={index}>
              {condition}
            </li>
          ))}
          <li className={css.conditionsLi}>
            Mileage: <span className={css.modalSpan}>{formattedMileage}</span>
          </li>
          <li className={css.conditionsLi}>
            Price: <span className={css.modalSpan}>{rentalPrice}</span>
          </li>
        </ul>
        <a className={css.rentalLink} href="tel:+380730000000">
          Rental car
        </a>
      </div>
    </div>
  );
};
