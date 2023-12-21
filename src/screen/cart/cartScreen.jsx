import React, { useContext, useEffect, useState } from 'react';
import './cartScreen.css'
import { DataContext } from '../../context/contextCart';
import ItemDetail from '../../components/Items/itemDetail/itemDetail'
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../../modules/mainModules';
import { db } from '../../config/firebase';


function cartScreen(props) {
    const { addItem, rmvItem, showCartAsArr } = useContext(DataContext);
    // DB
    const [dbContent, setDbContent] = useState([])
    const [cartFilter, setCartFilter] = useState([])
    const [loading, setLoading] = useState([])

    // DB conection
    const databaseColection = collection(db, 'products')
    useEffect(() => { dataCompile(getDocs, databaseColection, setDbContent, setLoading) }, [])
    useEffect(() => {
        const cartArr = []
        dbContent.forEach(element => {
            showCartAsArr().includes(element.id) ? cartArr.push(element) : null
        });
        setCartFilter(cartArr)
    }, [dbContent])

    return (
        <div className='cs-component'>
            {loading ? <h1>Loading...</h1> : (
            cartFilter.length > 0 ?
            cartFilter.map(product => (<ItemDetail addItem={addItem} rmvItem={rmvItem} cartScreen={true} key={product.id} product={product} />))
            : null //DISPLAY EMPTY CART RENDER
            )}
        </div>
    );
}

export default cartScreen;