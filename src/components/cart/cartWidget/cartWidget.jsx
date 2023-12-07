import React, { useContext } from 'react'
import { DataContext } from '../../../context/contextCart';
import { Link } from 'react-router-dom';


function carWidget(props) {


  return (
    <>
      <Link style={{ textDecoration: 'none' }} className={props.className} to={'#'}>
        <i className="fa-solid fa-cart-shopping" ></i>1000
      </Link>
    </>
  );
}

export default carWidget;