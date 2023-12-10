import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemsCard from '../../itemsCard/itemsCard';
import { getDocs, collection } from 'firebase/firestore';
import { fbGetCall } from '../../../../modules/mainModules';
import { db } from '../../../../config/firebase';

function itemListContainer({ containerTitle, allProducts, onSale, byMuscle, filteredProducts }) {
    const [dbContent, setDbContent] = useState([])
    const [ifOnSale, setIfOnSale] = useState([])


    // DB conection
    const databaseColection = collection(db, 'products')

    // USE EFFECT
    // DB info
    useEffect(() => {
        const dataCompile = async () => {
            const data = await fbGetCall(getDocs, databaseColection)
            setDbContent(data)
        }
        dataCompile()
    }, [])
    useEffect(() => {
        if (onSale && dbContent.length > 0) {
            setIfOnSale(dbContent.filter(product => product.discount > 0))
        }
    }, [dbContent])

    return (
        <div>
            {/* <h2>{containerTitle}</h2> */}
            <div className="ilc-card-container-div">
                {allProducts ?
                    dbContent.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image} />
                    ))
                    : null}
                {onSale ?
                    ifOnSale.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image} />
                    ))
                    : null}
                {byMuscle ?
                    filteredProducts.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image} />
                    ))
                    : null}
            </div>
        </div>
    );
}

export default itemListContainer;