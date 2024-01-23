import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopContextProvider from "../src/components/Context/HomeContext.jsx"
import '../node_modules/font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

