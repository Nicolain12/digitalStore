import React, { useContext, useEffect, useState } from 'react';
import './cartScreen.css'
import { DataContext } from '../../context/contextCart';
import ItemDetail from '../../components/Items/itemDetail/itemDetail'
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../../modules/mainModules';
import { db } from '../../config/firebase';
import { SyncLoader } from 'react-spinners';


function cartScreen(props) {
    const { addItem, rmvItem, showCartAsArr, clearCart, productsCart, cartPrice } = useContext(DataContext);
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
            if (showCartAsArr().includes(element.id)) {
                element.counter = productsCart[element.id]
                cartArr.push(element)
            }
        });
        setCartFilter(cartArr)
    }, [dbContent, showCartAsArr])
   

    return (
        <div className='cs-component'>
            <div className="cs-items-div">

                {loading ? <div className="loader"><SyncLoader color="#4F709C" /></div> : (
                    cartFilter.length > 0 ?
                        cartFilter.map(product => (<ItemDetail addItem={addItem} rmvItem={rmvItem} cartScreen={true} key={product.id} product={product} />))
                        : <div className='cs-empty-cart'>
                            <h1>Nothing on Cart</h1>
                        </div>
                )}
            </div>
            {loading ? null :

                (cartFilter.length > 0 ? <div className="cs-control-div">
                    <p className='cs-control-price'>$ {cartPrice}</p>
                    <button className='cs-control-button clear' onClick={() => clearCart()}>Clear Cart</button>
                    <button className='cs-control-button buy'>Buy Cart</button>
                </div> : null)
            }
        </div>
    );
}

export default cartScreen;