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
		<div>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<MainNavigation onShowCart={showCartHandler} />
			<main>
				<div className='mx-[10%]'>
					{props.children}
				</div>
			</main>
		</div>
	)
}

export default Layout;