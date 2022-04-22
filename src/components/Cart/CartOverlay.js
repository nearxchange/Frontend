/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import CartContext from '../../store/cart-context'
import CartItemOverlay from './CartItemOverlay'


const products = [
	{
		id: 1,
		author: 'wallet.testnet',
		price: '$90.00',
		text: 'seller_wallet.testnet',
		href: '#',
	}
	// More products...
]

const CartOverlay = (props) => {
	const [open, setOpen] = useState(true)
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 })
	};

	const cartItems = <ul>{cartCtx.items.map((item) => <CartItemOverlay
		key={item.id}
		author={item.author}
		amount={item.amount}
		price={item.price}
		text={item.text}
		onRemove={cartItemRemoveHandler.bind(null, item.id)}
		onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 overflow-hidden"
				onClose={(e) => {
					props.onClicks(e);
					setOpen(false);
				}}>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<div className="w-screen max-w-md pointer-events-auto">
								<div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
									<div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
										<div className="flex items-start justify-between">
											<Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
											<div className="flex items-center ml-3 h-7">
												<button
													type="button"
													className="p-2 -m-2 text-gray-400 hover:text-gray-500"
													onClick={(e) => {
														props.onClicks(e);
														setOpen(false);
													}}
												>
													<span className="sr-only">Close panel</span>
													<XIcon className="w-6 h-6" aria-hidden="true" />
												</button>
											</div>
										</div>

										<div className="mt-8">
											<div className="flow-root">
												<ul role="list" className="-my-6 divide-y divide-gray-200">
													{cartItems}
												</ul>
											</div>
										</div>
									</div>

									<div className="px-4 py-6 border-t border-gray-200 sm:px-6">
										<div className="flex justify-between text-base font-medium text-gray-900">
											<p>Subtotal</p>
											<p>{totalAmount}</p>
										</div>
										<p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
										<div className="mt-6">
											<a
												href="#"
												className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
											>
												Checkout
											</a>
										</div>
										<div className="flex justify-center mt-6 text-sm text-center text-gray-500">
											<p>
												or{' '}
												<button
													type="button"
													className="font-medium text-indigo-600 hover:text-indigo-500"
													onClick={(e) => {
														setOpen(false);
														props.onClicks(e);
													}}
												>
													Continue Shopping<span aria-hidden="true"> &rarr;</span>
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default CartOverlay;