import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home/home'
import AllProductsList from './screen/allProductsList/allProductsList'
import ItemDetalScreen from './screen/itemDetailScreen/itemDetalScreen'
import './App.css'
import Layout from './screen/layout/layout'
function App() {

  // useEffect(() => {
  //   console.log(`Component APP mounted ${new Date().toLocaleTimeString()}`);
  //   return () => {
  //     console.log('Component APP will unmount');
  //   };
  // }, [])

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            {/****************** HOME ******************/}
            {/****************** PRODUCTS ******************/}
            <Route exact path="/allProducts" element={<AllProductsList />} />
            <Route exact path="/byMuscle" element={<AllProductsList byMuscle={true} />} />
            <Route exact path="/item/:id" element={<ItemDetalScreen />} />
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

