import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { initContract } from './utils'
import './tailwind.css';
import 'tw-elements';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
