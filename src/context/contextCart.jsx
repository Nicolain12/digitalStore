import { count } from 'firebase/firestore';
import React, { useState, useEffect, createContext } from 'react'; 

export const DataContext = createContext()

function contextCart({ children, cartChange }) {
    const [productsCart, setProductsCart] = useState({})

    const addItem = (id, counter) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0) {
            if (objKeys.includes(id.toString())) {
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
    }
    const rmvItem = (id, counter) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0 && objKeys.includes(id.toString())) {
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
    }
    const isInItem = (id) => {
        const objKeys = Object.getOwnPropertyNames(productsCart)
        if (objKeys.length > 0 && objKeys.includes(id.toString())) {
            return productsCart[id]
        } else {
            return 0
        }
    }

    const functionsContext = {
        addItem,
        rmvItem,
        isInItem,
        length: Object.getOwnPropertyNames(productsCart).length
    }
    return (
        <DataContext.Provider value={functionsContext}>
            {children}
        </DataContext.Provider>
    );
}

export default contextCart;