import React, { useState, useEffect } from 'react';
import './itemDetail.css'
import { useParams } from 'react-router-dom';
import ItemsCard from '../itemsCard/itemsCard';
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../../../modules/mainModules';
import { db } from '../../../config/firebase';

function itemDetail(props) {

    const { id } = useParams()
    const [dbContent, setDbContent] = useState([])
    const [product, setProduct] =  useState({})
    // DB conection
    const databaseColection = collection(db, 'products')

    // USE EFFECT
    // DB info
    useEffect(() => {
        dataCompile(getDocs, databaseColection, setDbContent)
    }, [])
    useEffect(() => {
        if ( dbContent.length > 0) {
            setProduct(dbContent.find(product => product.id == id))
        }
    }, [dbContent])

    return (
        <div className='id-component'>
            <p>Para la entrega final prometo armar un estilo personalizado para la muestra del detalle del producto</p>
            <ItemsCard key={product.id} id={product.id} name={product.name} muscle={typeof product.muscle == 'object' ? product.muscle.join(', ') : product.muscle} price={product.price} image={product.image} />
        </div>
    );
}

export default itemDetail;