import React, { useState, useEffect, createContext, memo } from 'react';

export const DataContext = createContext()

function contextCart({ children }) {
    const [productsCart, setProductsCart] = useState({})
    const [cartLength, setCartLength] = useState(Object.getOwnPropertyNames(productsCart).length);
    // UpdateCart length
    useEffect(() => {
        updateCartLength()
    }, [productsCart])
    const updateCartLength = () => {
        setCartLength(Object.getOwnPropertyNames(productsCart).length);
    };

    // Functions
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
    



    return (
        <DataContext.Provider value={{
            addItem,
            rmvItem,
            isInItem,
            productsCart,
            length: cartLength,
            showCartAsArr
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default contextCart;