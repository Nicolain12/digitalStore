import React, { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemsCard from '../../itemsCard/itemsCard';
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../../../../modules/mainModules';
import { db } from '../../../../config/firebase';

function itemListContainer({ allProducts, onSale, byMuscle, filteredProducts }) {
    const [dbContent, setDbContent] = useState([])
    const [ifOnSale, setIfOnSale] = useState([])
    const [loadingAP, setLoadingAP] = useState(true);
    const [loadingOP, setLoadingOP] = useState(true);
    const [loadingFP, setLoadingFP] = useState(true);


    // DB conection
    const databaseColection = collection(db, 'products')

    // USE EFFECT
    // DB info
    useEffect(() => {
        setTimeout(() => { 
            dataCompile(getDocs, databaseColection, setDbContent)
            setLoadingAP(false)
        }, 2000);
    }, [])
    useEffect(() => {
        if (onSale && dbContent.length > 0) {
            setIfOnSale(dbContent.filter(product => product.discount > 0))
            setLoadingOP(false)
        }
    }, [dbContent])
    useEffect(() => {
        byMuscle ? (filteredProducts.length > 0 ? setLoadingFP(false): null) : null
    }, [filteredProducts])


    return (
        <div>
            <div className="ilc-card-container-div">
                {allProducts ?
                    (!loadingAP ? dbContent.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={product.muscle.length > 1 ? product.muscle.join(', ') : product.muscle[0]} price={product.price} image={product.image} />
                    )) : <h1>LOADING...</h1>)
                    : null}
                {onSale ?
                    (!loadingOP ? ifOnSale.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={product.muscle.length > 1 ? product.muscle.join(', ') : product.muscle[0]} price={product.price} image={product.image} />
                    )) : <h1>LOADING...</h1>)
                    : null}
                {byMuscle ?
                    (!loadingFP ? filteredProducts.map(product => (
                        <ItemsCard key={product.id} id={product.id} name={product.name} muscle={product.muscle.length > 1 ? `${product.muscle[0]}, ${product.muscle[1]}` : product.muscle[0]} price={product.price} image={product.image} />
                    )) : <h1>LOADING...</h1>)
                    : null}
            </div>
        </div>
    );
}


export default itemListContainer