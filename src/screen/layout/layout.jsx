import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';

function layout(props) {
    return (
        <div className='component-layout'>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default layout;