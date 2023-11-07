import React from 'react';
import './itemsCard.css'

function itemsCard(props) {
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
                    <div className='ic-action-button'><i className="fa-solid fa-cart-shopping ic-item" ></i></div>
                </div>
            </div>
        </article>
    );
}

export default itemsCard;