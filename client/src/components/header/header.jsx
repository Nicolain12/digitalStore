import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'



function header({ nameClass }) {

  return (
    <div className="component-header">
      <header>
        <div className="h-logo-div">
        <h1>Header</h1>
        </div>
        <div className="h-links-div">
          <Link className='h-links-options' to={'#'}>All Products</Link>
          <Link className='h-links-options' to={'#'}>Hot sale</Link>
          <Link className='h-links-options' to={'#'}>Contact us</Link>
        </div>
        <div className="h-profile-menu-div">
          <div className="h-profile-options-div">
            <Link className='h-profile-links' to={'#'}>Register</Link>
            <Link className='h-profile-links' to={'#'}>Profile</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default header