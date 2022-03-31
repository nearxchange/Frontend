import React from 'react'

import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { login, logout } from '../../utils'
import HeaderCartButton from './HeaderCartButton'

const MainNavigation = (props) => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Near Wallet</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/walletMarketPlace' activeClassName={classes.active}>Wallet Market Place</NavLink>
					</li>
					<li>
						<NavLink to='/new-quote' activeClassName={classes.active}>Listing Your Wallet</NavLink>
					</li>
				</ul>
			</nav>
			<HeaderCartButton onClick={props.onShowCart} />
			<button className={classes.button} onClick={login}><span>Sign in</span></button>
		</header>
	)
}

export default MainNavigation;