import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom';
import ContextCart from './context/contextCart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextCart>
      <App />
    </ContextCart>
  </BrowserRouter>
);
