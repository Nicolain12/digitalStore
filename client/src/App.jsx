import React from 'react'
import { Routes, Route , useLocation } from 'react-router-dom'
import Home from './screen/Home/home'
import Header from './components/header/header'
import './App.css'

function App() {
  return (
    <div className='App'>
    <Header className='header'/>
      <Routes>
        {/****************** HOME ******************/}
        <Route exact path="/" element={<Home />} />
      </Routes>
  </div>
    
  )
}

export default App
