import React, { useContext } from 'react';

import AddToFavoriteIcon from '../Cart/CartItem/Icon/AddToFavoriteIcon';
import AddToCartButton from './AddToCartButton';
import CartContext from '../../store/cart-context';

const WalletItem = (props) => {
  const cartCtx = useContext(CartContext)
  // const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      author: props.author,
      price: props.price,
      text: props.text
    });
  };

  return (
    <li className='grid grid-cols-4 gap-y-4'>
      <button className='pl-16 mx-auto'><AddToFavoriteIcon /></button>
      <figure className='py-2 px-auto'>
        <blockquote className='text-2xl'>
          <p>{props.text}</p>
        </blockquote>
        <figcaption className='text-sm italic'>by: {props.author}</figcaption>
      </figure>
      <figcaption className='flex mx-auto my-auto text-lg'>
        {props.price}
      </figcaption>
      <AddToCartButton onAddToCart={addToCartHandler} />
    </li >
  );
};

export default WalletItem;
