import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home/home'
import NavBar from './components/navBar/navBar'
import AllProductsList from './screen/allProductsList/allProductsList'
import ItemDetail from './components/itemDetail/itemDetail'
import './App.css'
import ContextCart from './context/contextCart'
function App() {
  return (
    <ContextCart>
    <div className='App'>
    <NavBar/>
      <Routes>      
        <Route exact path="/" element={<Home />} />
        {/****************** HOME ******************/}
        {/****************** PRODUCTS ******************/}
        <Route exact path="/allProducts" element={<AllProductsList/>} />
        <Route exact path="/byMuscle" element={<AllProductsList byMuscle={true}/>} />
        <Route exact path="/item/:id" element={<ItemDetail />} />
          {/* By Muscle */}
          {/* Cart */}
        {/****************** USER ******************/}
          {/* Profile */}
          {/* Loggin */}
          {/* Register */}
      </Routes>
  </div>
</ContextCart>
  )
}

export default App
