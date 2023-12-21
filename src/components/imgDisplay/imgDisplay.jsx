import React from 'react';
import './imgDisplay.css'

function imgDisplay({src, className}) {
    return (
        <div className={className}>
            <img className='app-img' src={src} alt="" />
            <div className='app-img-icon-div'>
            <i className="fa-regular fa-heart"></i>
            </div>
        </div>
    );
}

export default imgDisplay;