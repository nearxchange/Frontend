import React, { Fragment, useState } from 'react';
import MainNavigation from './MainNavigation';
import Cart from '../Cart/Cart';
import Footer from './Footer';

const Layout = (props) => {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	}

	const hideCartHandler = () => {
		setCartIsShown(false);
	}

	return (
		<div>
			<Cart isOpen={cartIsShown} onClose={hideCartHandler} />
			<MainNavigation onShowCart={showCartHandler} />
			<main>
				{props.children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout;