import React from 'react'

const CartItemOverlay = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	return (
		<li key={props.id} className="flex py-6">
			<div className="flex flex-col flex-1 ml-4">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href={props.href}> {props.text} </a>
						</h3>
						<p className="ml-4">{props.price}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">by: {props.author}</p>
				</div>
				<div className="flex items-end justify-between flex-1 text-sm">
					<div className="flex">
						<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={props.onRemove}>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItemOverlay;
