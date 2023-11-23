import React, { useState } from 'react';
import './itemsCard.css'

function itemsCard(props) {
    const [cartStatus, setCartStatus] = useState(false)
    return (
        <article className='ic-main-card-div'>
            <div className="ic-img-div">
                <img className='ic-product-img' src="https://www.ironcompany.com/media/catalog/product/cache/0497f845716ff9ff5fb3d560ec6f3888/l/e/legend-3906-comptetition-bench-press.jpg" alt="" />
            </div>
            <div className='ic-info-div'>
                <h4 className='ic-info-name'>Bench Press</h4>
                <p className='ic-info-muscle'>Pecho</p>
            </div>
            <div className="ic-action-div">
                <div className="ic-action-price-div">
                    <p className="ic-action-price">$9,999</p>
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