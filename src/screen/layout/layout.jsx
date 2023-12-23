import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';

function layout(props) {
    return (
        <div className='component-layout'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default layout;