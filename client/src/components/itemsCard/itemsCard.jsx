import React, { useState } from 'react';
import './itemsCard.css'

function itemsCard({id, name, muscle, price, image}) {
    const [cartStatus, setCartStatus] = useState(false)
    const itemOnClick = () =>{
        window.location.href = `/item/${id}`
    }
    return (
        <article onClick={itemOnClick} className='ic-main-card-div'>
            <div className="ic-img-div">
                <img className='ic-product-img' src={image} alt="" />
            </div>
            <div className='ic-info-div'>
                <h4 className='ic-info-name'>{name}</h4>
                <p className='ic-info-muscle'>{muscle}</p>
            </div>
            <div className="ic-action-div">
                <div className="ic-action-price-div">
                    <p className="ic-action-price">${price}</p>
                </div>
                <div className="ic-actions-buttons-div">
                    {cartStatus ? <div className='ic-action-cart-button-div'>
                        <button className='ic-action-cart-button'><i onClick={()=>setCartStatus(false)} class="fa-solid fa-minus"></i></button>
                        <p className='ic-action-cart-counter'>1</p>
                        <button className='ic-action-cart-button'><i class="fa-solid fa-plus"></i></button>
                    </div> : <div className='ic-action-button'><i onClick={()=>setCartStatus(true)} className="fa-solid fa-cart-shopping ic-item" ></i></div>}

                </div>
            </div>
            <div className="ic-actions-cart-div">

            </div>
        </article>
    );
}

export default itemsCard;