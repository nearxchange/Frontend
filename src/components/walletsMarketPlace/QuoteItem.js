import React from 'react'

import classes from './QuoteItem.module.css';
import AddToCartIcon from '../Cart/CartItem/Icon/AddToCartIcon';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <button className={classes.btn}><AddToCartIcon /></button>
    </li>
  );
};

export default QuoteItem;
