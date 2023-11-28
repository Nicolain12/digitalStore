import React from 'react';
import './itemListContainer.css'
import ItemsCard from '../../itemsCard/itemsCard';
import database from '/public/database'

function itemListContainer({containerTitle, allProducts, onSale, byMuscle, filteredProducts}) {

    const ifOnSale = onSale ? database.filter(product => product.discount > 0) : null

    return (
        <div>
            <h2>{containerTitle}</h2>
        <div className="ilc-card-container-div">
            {allProducts? 
            database.map(product =>(
                <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image}/>
            ))
            : null}
            {onSale? 
            ifOnSale.map(product =>(
                <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image}/>
            ))
            : null}
            {byMuscle? 
                filteredProducts.map(product =>(
                    <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image}/>
                ))
                : null}
        </div>
        </div>
    );
}

export default itemListContainer;