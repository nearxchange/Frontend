import React from 'react'

import QuoteList from '../components/walletsMarketPlace/QuoteList';
import SearchBox from '../components/comments/SearchBox';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'bob_seller.testnet', text: 'alice.testnet' },
	{ id: 'q2', author: 'peter_seller1.testnet', text: 'wallet.testnet' },
	{ id: 'q3', author: 'peter_seller1.testnet', text: 'wallet.testnet' },
	{ id: 'q4', author: 'peter_seller1.testnet', text: 'wallet.testnet' },
	{ id: 'q5', author: 'peter_seller1.testnet', text: 'wallet.testnet' },
];


const WalletMarketPlace = () => {
	return (
		<div>
			<SearchBox />
			<QuoteList quotes={DUMMY_QUOTES} />
		</div>
	)

};

export default WalletMarketPlace;