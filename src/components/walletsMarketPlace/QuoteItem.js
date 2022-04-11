import React from 'react'

import AddToCartIcon from '../Cart/CartItem/Icon/AddToCartIcon';

const QuoteItem = (props) => {
  return (
    <li className='w-1/2 text-center'>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <button><AddToCartIcon />HELLO</button>
    </li>
  );
};

export default QuoteItem;
