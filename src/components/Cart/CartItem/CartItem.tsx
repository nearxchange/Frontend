import React from 'react';

type Props = {
  name: string;
  amount: number;
  checked: boolean
}

const CartItem: React.FC<Props> = ({name, amount, checked}) => {

  return (
      <div class='flex flex-row items-center py-3'>
        <div class="form-check mr-2">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            type="checkbox"
            value=""
            checked={checked}
          />
        </div>
        <h2 class='flex-1'>{name}</h2>
        <div class='flex flex-row items-center'>
          <img className='w-[16px] h-[16px] mr-1' src={require('../../../assets/icons/near-logo.png')}   />
          <span>{amount}</span>
        </div>
      </div>
  );
};

export default CartItem;
