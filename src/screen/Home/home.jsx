import React from 'react'
import './home.css'
import ItemListContainer from '../../components/Items/itemsList/itemListContainer/itemListContainer'


function home() {


    return (
        <div className='screen-home'>
            <img className='home-banner' src="/banner/banner.png" alt="" />
            <h2 className='home-title-onsale'>ON SALE 🏷️</h2>
            <ItemListContainer containerTitle={'On sale'} onSale={true} />
        </div>
    )
}

export default home