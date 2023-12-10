import React from 'react';
import { Link } from 'react-router-dom';


function carWidget(props) {
    return (
        <>
        <Link style={{ textDecoration: 'none' }} className={props.className}  to={'#'}><i className="fa-solid fa-cart-shopping" ></i>3</Link>
      </>
    );
}

export default carWidget;