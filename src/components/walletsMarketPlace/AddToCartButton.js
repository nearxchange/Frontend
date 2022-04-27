import React from "react";
import AddToCartIcon from "../Cart/CartItem/Icon/AddToCartIcon";

const AddToCartButton = (props) => {

	const addToCartHandler = (event) => {
		event.preventDefault();
		props.onAddToCart();
	}

	return (
		<button className='my-auto mr-4' onClick={addToCartHandler}>
			<AddToCartIcon />
		</button>
	);
}

export default AddToCartButton;
