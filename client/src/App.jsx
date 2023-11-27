import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './screen/Home/home';
import Layout from './screen/layout/layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HOME */}
          <Route index element={<Home />} />
          {/* PRODUCTS */}
          {/* All Products */}
          {/* By Muscle */}
          {/* Cart */}
          {/* USER */}
          {/* Profile */}
          {/* Loggin */}
          {/* Register */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
