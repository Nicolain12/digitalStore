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
        {/****************** HOME ******************/}
        <Route exact path="/" element={<Home />} />
      </Routes>
  </div>
    
  )
}

export default App
