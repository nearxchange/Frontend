import React from 'react';
import CartItem from '../components/Cart/CartItem/CartItem';

const Checkout = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            <div className='order-last md:order-first'>
                <p class='font-bold text-lg'>Your Cart</p>
                <CartItem
                    name='thanhnt.near'
                    amount={100}
                />
                <CartItem
                    name='rogernguyen.near'
                    amount={100}
                />
                <CartItem
                    name='near.near'
                    amount={100}
                />
                <div class="flex space-x-2 justify-end mt-4">
                    <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className='order-first md:order-last'>
                <p class='font-bold text-lg'>Your Balance</p>

                <div class='flex flex-row items-center py-3'>
                    <img className='w-[16px] h-[16px] mr-1' src={require('assets/icons/near-logo.png')}   />
                    <span>5000</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout;