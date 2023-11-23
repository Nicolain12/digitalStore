import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
import CartWidget from '../cart/cartWidget/cartWidget';



function navBar({ nameClass }) {
  // Use States
const [scrolling, setScrolling] = useState(false)

// Functions
// SCROLL
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className="component-header">
      <header className={scrolling ? 'headerScrolling' : 'header'}>
        <div className="h-logo-div">
          <img onClick={()=>window.location = '/'} className='h-logo-img' src="../../../public/logo/mainLogo.png" alt="" />
        </div>
        <div className="h-links-div">
          <div className="h-links-inner-div">
            <Link className='h-links-options' to={'#'}>All Products</Link>
            <Link className='h-links-options' to={'#'}>Hot sale</Link>
            <Link className='h-links-options' to={'#'}>Contact us</Link>
          </div>
        </div>
        <div className="h-profile-menu-div">
          {/* Not Logged */}
          {/* <div className="h-profile-options-div">
            <Link className='h-profile-links' to={'#'}>Loggin</Link>
            <Link className='h-profile-links' to={'#'}>Register</Link>
          </div> */}
          {/* Logged */}
          <div className="h-profile-options-div">
            <CartWidget className='h-profile-links' />
            <Link className='h-profile-links' to={'#'}><i className="fa-regular fa-user"></i></Link>
          </div>
        </div>
        <div className="h-burgermenu-div">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  )
}

export default navBar