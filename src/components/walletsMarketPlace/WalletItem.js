import React from 'react';

import AddToCartIcon from '../Cart/CartItem/Icon/AddToCartIcon';
import AddToFavoriteIcon from '../Cart/CartItem/Icon/AddToFavoriteIcon';

const WalletItem = (props) => {
  return (
    <li className='grid grid-cols-4 gap-y-4'>
      <button className='pl-16 mx-auto'><AddToFavoriteIcon /></button>
      <figure className='py-2 px-auto'>
        <blockquote className='text-2xl'>
          <p>{props.text}</p>
        </blockquote>
        <figcaption className='text-sm'>by: {props.author}</figcaption>
      </figure>
      <figcaption className='flex mx-auto my-auto text-lg'>
        {props.price}
      </figcaption>
      <button className='my-auto mr-4'><AddToCartIcon /></button>
    </li >
  );
};

export default WalletItem;
