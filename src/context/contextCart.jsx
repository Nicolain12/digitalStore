import React, { useState, useEffect, createContext, memo } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { dataCompile } from '../modules/mainModules';
export const DataContext = createContext()

function contextCart({ children }) {
    // STATES
    // DB
    const [dbContent, setDbContent] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    // CART
    const [productsCart, setProductsCart] = useState({})
    const [cartLength, setCartLength] = useState(Object.getOwnPropertyNames(productsCart).length);



    // DB conection
    const databaseColection = collection(db, 'products')


    // *********** FUNCTIONS *************
    const updateCartLength = () => {
        setCartLength(Object.getOwnPropertyNames(productsCart).length);
    };
    // Functions Cart
    const addItem = (id, counter) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0) {
            if (objKeys.includes(id)) {
                const newObj = productsCart
                newObj[id] = ++newObj[id]
                counter(newObj[id])
                setProductsCart(newObj)
            } else {
                const newObj = productsCart
                newObj[id] = 1
                counter(newObj[id])
                setProductsCart(newObj)
            }
        } else {
            const iniObj = {}
            iniObj[id] = 1
            counter(iniObj[id])
            setProductsCart(iniObj)
        }
        cartPriceFunction()
        updateCartLength();
    }
    const rmvItem = (id, counter) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0 && objKeys.includes(id)) {
            if (productsCart[id] > 1) {
                const newObj = productsCart
                newObj[id] = --newObj[id]
                counter(newObj[id])
                setProductsCart(newObj)
            } else {
                const newObj = productsCart
                delete newObj[id]
                counter(0)
                setProductsCart(newObj)
            }
        }
        cartPriceFunction()
        updateCartLength();
    }
    const isInItem = (id) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0 && objKeys.includes(id)) {
            return productsCart[id]
        } else {
            return 0
        }
    }
    const showCartAsArr = () => {
        const prodsArr = []
        for (const prodId in productsCart) {
            prodsArr.push(prodId)
        }
        return prodsArr
    }
    const clearCart = () => {
        setProductsCart({})
    }
    const cartPriceFunction = () => {
        const cartArr = []
        let cartPriceSum = 0
        dbContent.forEach(element => {
            if (showCartAsArr().includes(element.id)) {
                element.counter = productsCart[element.id]
                cartArr.push(element)
            }
        });
        cartArr.forEach(prod => cartPriceSum = cartPriceSum + prod.price * prod.counter)
        setCartPrice(cartPriceSum);
    }
    // ***********************************

    // USEEFFECTS
    // UpdateCart length
    useEffect(() => { dataCompile(getDocs, databaseColection, setDbContent) }, [])
    useEffect(() => {updateCartLength()}, [productsCart])
    useEffect(() => {cartPriceFunction()}, [dbContent, productsCart])
  

    return (
        <DataContext.Provider value={{
            addItem,
            rmvItem,
            isInItem,
            productsCart,
            length: cartLength,
            showCartAsArr,
            clearCart,
            cartPrice,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default contextCart;