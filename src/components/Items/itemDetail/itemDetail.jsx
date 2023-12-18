import React from 'react';
import './itemDetail.css'


function itemDetail({product}) {
    return (
            <div className="id-main-container">
                {/* Article Detail */}
                <div className="id-img-div">
                    <img className='id-img' src={product.image} alt="" />
                </div>
                <div className="id-info-div">
                    <div className='id-info-inner-div name'>
                        <h2 className='id-info-content name'>{product.name}</h2>
                    </div>
                    <div className='id-info-inner-div muscle'>
                        <h4 className='id-info-content muscle title'>Muscle:</h4>
                        <p className='id-info-content muscle content'>{product.muscle}</p>
                    </div>
                    <div className='id-info-inner-div description'>
                        <h4 className='id-info-content description title'>Details:</h4>
                        <p className='id-info-content description content'>{product.description}</p>
                    </div>
                    <div className='id-info-inner-div price'>
                        <p className='id-info-content price'>$ {product.price}</p>
                    </div>
                    <div className='id-info-inner-div buttons'>
                        <button className='id-button buy'>buy</button>
                        <button className='id-button save favorite'>favorite</button>
                        <button className='id-button save cart'>cart</button>
                    </div>
                </div>

            </div>
        
    );
}

export default itemDetail;