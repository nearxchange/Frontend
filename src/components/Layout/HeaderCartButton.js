import React, { useContext, useEffect, useState } from "react"

import CartIcon from "../Cart/CartItem/Icon/CartIcon"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + 1;
	}, 0);
	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighLighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		}
	}, [items]);

	return (
		<button onClick={props.onClick}>
			<span>
				<CartIcon />
			</span>
			{/* Your Cart */}
			<span>
				{numberOfCartItems}
			</span>
		</button >
	);
};

export default HeaderCartButton;