import React from 'react'

import classes from './SearchBox.module.css';

const SearchBox = (props) => {
	return (
		<form action="/action_page.php">
			<div className={classes.search_container}>
				<input type="text" placeholder="Find NEAR Wallet" />
				<button type="submit">Search</button>
			</div>
		</form>
	);
}

export default SearchBox;