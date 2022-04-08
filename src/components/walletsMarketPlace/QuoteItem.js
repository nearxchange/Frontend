import React from 'react'

import AddToCartIcon from '../Cart/CartItem/Icon/AddToCartIcon';

const QuoteItem = (props) => {
  return (
    <li>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <button><AddToCartIcon /></button>
    </li>
  );
};

export default QuoteItem;
