import React from 'react'
import { Routes, Route , useLocation } from 'react-router-dom'
import Home from './screen/Home/home'
import NavBar from './components/navBar/navBar'
import './App.css'

function App() {
  return (
    <div className='App'>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} >
        {/****************** HOME ******************/}
        {/****************** PRODUCTS ******************/}
          {/* All Products */}
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
