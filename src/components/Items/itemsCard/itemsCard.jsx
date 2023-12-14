import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../../../context/contextCart';
import './itemsCard.css'
import { Link } from 'react-router-dom';


function itemsCard({ id, name, muscle, price, image }) {
    const { addItem, rmvItem, isInItem } = useContext(DataContext);
    const [cartCount, setCartCount] = useState(isInItem(id))

    return (
        <Link  to={`/item/${id}`} className='ic-main-card-div'>
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
                    {cartCount > 0 ? <div className='ic-action-cart-button-div'>
                        <button  onClick={(e) => {
                            e.preventDefault()
                            rmvItem(id, setCartCount)
                        }} className='ic-action-cart-button'><i className="fa-solid fa-minus"></i></button>
                        <p className='ic-action-cart-counter'>{cartCount}</p>
                        <button onClick={(e) => {
                            e.preventDefault()
                            addItem(id, setCartCount)
                        }} className='ic-action-cart-button'><i className="fa-solid fa-plus"></i></button>
                    </div> : <div onClick={(e) => {
                        e.preventDefault()
                        addItem(id, setCartCount)
                    }} className='ic-action-button'><i  className="fa-solid fa-cart-shopping ic-item" ></i></div>}

                </div>
            </div>
            <div className="ic-actions-cart-div">

            </div>
        </Link>
    );
}

export default itemsCard;