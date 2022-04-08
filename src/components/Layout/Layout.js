import React, { Fragment, useState } from 'react';
import MainNavigation from './MainNavigation';
import Cart from '../Cart/Cart';

const Layout = (props) => {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	}

	const hideCartHandler = () => {
		setCartIsShown(false);
	}

	return (
		<Fragment>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<MainNavigation onShowCart={showCartHandler} />
			<main>{props.children}</main>
		</Fragment>
	)
}

export default Layout;