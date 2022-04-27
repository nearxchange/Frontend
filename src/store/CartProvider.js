import React, { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState = {
	items: [],
	totalAmount: 0
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {

		let itemPrice = action.item.price;

		const exitstingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[exitstingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
			};
			updatedItems = [...state.items];
			updatedItems[exitstingCartItemIndex] = updatedItem;
			itemPrice = 0;
		} else {
			updatedItems = state.items.concat(action.item)
		}
		let updatedTotalAmount = state.totalAmount + itemPrice;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}
	if (action.type === 'REMOVE') {

		const exitstingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[exitstingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		updatedItems = state.items.filter(item => item.id !== action.id);
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}

	return defaultCartState;
}

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item: item
		});
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler
	};

	return <CartContext.Provider value={cartContext}>
		{props.children}
	</CartContext.Provider>
}

export default CartProvider;