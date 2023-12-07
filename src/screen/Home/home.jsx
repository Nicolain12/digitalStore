import React from 'react'
import './home.css'
import ItemListContainer from '../../components/itemsList/itemListContainer/ItemListContainer'


function home() {


    return (
        <div className='screen-home'>
            <h1>Banner here</h1>
            <ItemListContainer containerTitle={'On sale'} onSale={true} />
        </div>
    )
}

export default home