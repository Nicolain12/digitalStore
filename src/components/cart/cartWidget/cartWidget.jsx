import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../context/contextCart';
import { Link } from 'react-router-dom';

function CarWidget(props) {
  const { length } = useContext(DataContext);
  return (
    <>
      <Link style={{ textDecoration: 'none' }} className={props.className} to={'/cart'}>
        <i className="fa-solid fa-cart-shopping"></i>{length}
      </Link>
    </>
  );
}

export default CarWidget;
