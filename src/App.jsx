import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home/home'
import AllProductsList from './screen/allProductsList/allProductsList'
import ItemDetail from './components/itemDetail/itemDetail'
import './App.css'
import Layout from './screen/layout/layout'
function App() {

  useEffect(() => {
    // Code inside this block will run only once when the component mounts
    console.log(`Component APP mounted ${new Date().toLocaleTimeString()}`);

    // Any cleanup code can be added here if needed
    return () => {
      console.log('Component APP will unmount');
      // Cleanup code (if any)
    };
  }, [])

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            {/****************** HOME ******************/}
            {/****************** PRODUCTS ******************/}
            <Route exact path="/allProducts" element={<AllProductsList />} />
            <Route exact path="/byMuscle" element={<AllProductsList byMuscle={true} />} />
            <Route exact path="/item/:id" element={<ItemDetail />} />
            {/* By Muscle */}
            {/* Cart */}
            {/****************** USER ******************/}
            {/* Profile */}
            {/* Loggin */}
            {/* Register */}
          </Route>
        </Routes>
    </div>
  )
}
export default App

