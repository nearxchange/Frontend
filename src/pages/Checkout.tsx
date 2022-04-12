import React from 'react';
import CartItem from '../components/Cart/CartItem/CartItem';

const Checkout = () => {

    return (
        <div className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-2'>
            <div className='order-last md:order-first'>
                <p className='text-lg font-bold'>Your Cart</p>
                <CartItem
                    name='thanhnt.near'
                    amount={100}
                    checked={false}
                />
                <CartItem
                    name='rogernguyen.near'
                    amount={100}
                    checked={false}
                />
                <CartItem
                    name='near.near'
                    amount={100}
                    checked={false}
                />
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className='order-first md:order-last'>
                <p className='text-lg font-bold'>Your Balance</p>

                <div className='flex flex-row items-center py-3'>
                    <img className='w-[16px] h-[16px] mr-1' src={require('assets/icons/near-logo.png')} />
                    <span>5000</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout;