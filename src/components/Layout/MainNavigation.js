import React from 'react'

import { NavLink } from 'react-router-dom'
import { login, logout } from '../../utils'
import HeaderCartButton from './HeaderCartButton'

const MainNavigation = (props) => {
	return (
		<header>
			<div>Near Wallet</div>
			<nav>
				<ul>
					<li>
						<NavLink to='/walletMarketPlace'>Wallet Market Place</NavLink>
					</li>
					<li>
						<NavLink to='/new-quote'>Listing Your Wallet</NavLink>
					</li>
				</ul>
			</nav>
			<HeaderCartButton onClick={props.onShowCart} />
			<button onClick={login}><span>Sign in</span></button>
		</header>
	)
}

export default MainNavigation;