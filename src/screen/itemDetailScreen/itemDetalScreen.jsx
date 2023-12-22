import React, { useState, useEffect, useContext } from 'react';
import './itemDetailScreen.css'
import ItemDetail from '../../components/Items/itemDetail/itemDetail';
import ItemsCard from '../../components/Items/itemsCard/itemsCard';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../../modules/mainModules';
import { db } from '../../config/firebase';
import { DataContext } from '../../context/contextCart';
import { SyncLoader } from 'react-spinners';

const itemDetalScreen = () => {
    const { id } = useParams()
    const { addItem, rmvItem, isInItem } = useContext(DataContext);
    const [cartCount, setCartCount] = useState(isInItem(id))
    const [dbContent, setDbContent] = useState([])
    const [product, setProduct] = useState({})
    const [productRelated, setProductRelated] = useState([])
    const [loading, setLoading] = useState(true)
    // DB conection
    const databaseColection = collection(db, 'products')

    // USE EFFECT
    // DB info
    useEffect(() => {
        dataCompile(getDocs, databaseColection, setDbContent)
    }, [])
    useEffect(() => {
        if (dbContent.length > 0) {
            const findedProd = dbContent.find(product => product.id == id)
            const relProdArr = []
            findedProd.muscle.forEach(muscle => {
                dbContent.forEach(product => {
                    product.muscle.includes(muscle) ? relProdArr.push(product) : null
                });
            });
            findedProd.muscle.length > 1 ? findedProd.muscle = findedProd.muscle.join(', ') : null
            setProduct(findedProd)
            setProductRelated([...new Set(relProdArr)].filter(prod => prod.id != findedProd.id))
            setLoading(false)
        }
    }, [dbContent])
    return (
        <div className='ids-component'>
            {loading ? <div className="loader"><SyncLoader color="#4F709C" /></div> : <ItemDetail addItem={addItem} rmvItem={rmvItem} cartCount={cartCount} setCartCount={setCartCount} product={product} />}
            {loading ? null :
                (productRelated.length > 0 ? <div className="ids-products-related-div">
                    <div className="ids-prod-related-title">
                        <h2>Products Related</h2>
                    </div>
                    <div className="ids-prod-related-content">
                        {productRelated.map(product => (
                            <ItemsCard key={product.id} id={product.id} name={product.name} muscle={product.muscle.length > 1 ? product.muscle.join(', ') : product.muscle[0]} price={product.price} image={product.image} />
                        ))}
                    </div>
                </div> : null)
            }
        </div>
    );
};

export default itemDetalScreen;