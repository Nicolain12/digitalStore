import React, { useState, useContext } from 'react';
import './itemDetail.css'
import { DataContext } from '../../../context/contextCart';
import { Link } from 'react-router-dom';


function itemDetail({ product, cartScreen, addItem, rmvItem, cartCount, setCartCount }) {
    const { isInItem } = useContext(DataContext);
    const [cartCountC, setCartCountC] = useState(isInItem(product.id))
    return (
        <Link className={`id-main-container ${cartScreen ? 'cartScreen' : null}`} to={`/item/${product.id}`}>
            {/* Article Detail */}

            <div className={`id-img-div ${cartScreen ? 'cartScreen' : null}`}>
                <img className={`id-img ${cartScreen ? 'cartScreen' : null}`} src={product.image} alt="" />
            </div>
            <div className={`id-info-div ${cartScreen ? 'cartScreen' : null}`}>
                <div className='id-info-inner-div name'>
                    <h2 className='id-info-content name'>{product.name}</h2>
                </div>
                <div className='id-info-inner-div muscle'>
                    <h4 className='id-info-content muscle title'>Muscle:</h4>
                    <p className='id-info-content muscle content'>{product.muscle}</p>
                </div>
                {cartScreen ? null :
                    <div className='id-info-inner-div description'>
                        <h4 className='id-info-content description title'>Details:</h4>
                        <p className='id-info-content description content'>{product.description}</p>
                    </div>
                }
                <div className='id-info-inner-div price'>
                    <p className='id-info-content price'>$ {product.price}</p>
                </div>



                {cartScreen ?
                    <div className="id-actions-buttons-div">
                        <div className='id-action-cart-button-div'>
                            <button onClick={(e) => {
                                e.preventDefault()
                                rmvItem(product.id, setCartCountC)
                            }} className='id-action-cart-button'><i className="fa-solid fa-minus"></i></button>
                            <p className='id-action-cart-counter'>{cartCountC}</p>
                            <button onClick={(e) => {
                                e.preventDefault()
                                addItem(product.id, setCartCountC)
                            }} className='id-action-cart-button'><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div> :
                    <div className='id-info-inner-div buttons'>
                        <button className='id-button buy'>buy</button>
                        {cartCount > 0 ?
                            <div className='id-action-cart-button-div'>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    rmvItem(product.id, setCartCount)
                                }} className='id-action-cart-button'><i className="fa-solid fa-minus"></i></button>
                                <p className='id-action-cart-counter'>{cartCount}</p>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    addItem(product.id, setCartCount)
                                }} className='id-action-cart-button'><i className="fa-solid fa-plus"></i></button>
                            </div> :
                            <div onClick={(e) => {
                                e.preventDefault()
                                addItem(product.id, setCartCount)
                            }} className='ic-action-button'><i className="fa-solid fa-cart-shopping ic-item" ></i></div>}
                    </div>
                }

            </div>

        </Link>

    );
}

export default itemDetail;