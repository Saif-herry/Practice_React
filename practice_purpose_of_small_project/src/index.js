import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Context/ThemeContext';
import { ProductProvider } from './Context/ProductContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ProductProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </ProductProvider>
    </BrowserRouter>
);

