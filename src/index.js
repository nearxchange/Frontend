import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { initContract } from './utils'
import './tailwind.css';
import 'tw-elements';
import CartProvider from './store/CartProvider';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
