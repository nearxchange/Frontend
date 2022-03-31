import React, { Fragment, useState } from 'react';
import classes from './Layout.module.css'
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
			<main className={classes.main}>{props.children}</main>
		</Fragment>
	)
}

export default Layout;