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
    rentalConditions
  } = card[0];

  const conditionsArray = rentalConditions.split('\n');
  const formattedMileage = mileage.toLocaleString();

  const handleBackdropClick = event => {
    if (event.target.id !== 'backdrop') return;
    setIsModalOpen(false);
  };
  return (
    <div
      className={css.modalBackdrop}
      // style={{
      //   position: 'fixed',
      //   top: '0',
      //   left: '0',
      //   width: '100%',
      //   height: '100%',
      //   zIndex: '50',

      //   background: 'rgba(0, 0, 0, 0.6)',
      // }}
      onClick={handleBackdropClick}
      id="backdrop"
    >
      <div className={css.modal} key={id} id="modal">
        <img className={css.modalImg} src={img} alt={model} />
        <h1>
          {make}
          <span className={css.modalSpan}>{model}</span>, {year}
        </h1>
        <p>
          {type} {mileage} {rentalPrice}
        </p>
        <p>{description}</p>
        <p>Accessories and functionalities:</p>
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

        <p>Rental Conditions:</p>
        <ul className={css.conditions}>
          {conditionsArray.map((condition, index) => (
    <li key={index}>{condition}</li>
  ))}
  <li>Mileage: {formattedMileage}</li>
  <li>Price: {rentalPrice}</li>
        </ul>
      </div>
    </div>
  );
  // });
};
