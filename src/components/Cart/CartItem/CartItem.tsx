import React from 'react';

type Props = {
  name: string;
  amount: number;
  checked: boolean;
}

const CartItem: React.FC<Props> = ({ name, amount, checked }) => {

  return (
    <div className='flex flex-row items-center py-3'>
      <div className="mr-2 form-check">
        <input
          className="float-left w-4 h-4 my-1 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
          type="checkbox"
          value=""
          checked={checked}
        />
      </div>
      <h2 className='flex-1'>{name}</h2>
      <div className='flex flex-row items-center'>
        <img className='w-[16px] h-[16px] mr-1' src={require('assets/icons/near-logo.png')} />
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default CartItem;
