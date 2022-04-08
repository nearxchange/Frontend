import React from 'react'

const SearchBox = (props) => {
	return (
		<form action="/action_page.php">
			<div>
				<input type="text" placeholder="Find NEAR Wallet" />
				<button type="submit">Search</button>
			</div>
		</form>
	);
}

export default SearchBox;