import React from 'react'

import WalletList from '../components/walletsMarketPlace/WalletList';
import SearchBox from '../components/comments/SearchBox';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'bob_seller.testnet', price: '10', text: 'alice.testnet' },
	{ id: 'q2', author: 'peter_seller1.testnet', price: '10', text: 'wallet.testnet' },
	{ id: 'q3', author: 'peter_seller1.testnet', price: '10', text: 'wallet.testnet' },
	{ id: 'q4', author: 'peter_seller1.testnet', price: '10', text: 'wallet.testnet' },
	{ id: 'q5', author: 'peter_seller1.testnet', price: '10', text: 'wallet.testnet' },
];


const WalletMarketPlace = () => {
	return (
		<div>
			<SearchBox />
			<WalletList quotes={DUMMY_QUOTES} />
		</div>
	)

};

export default WalletMarketPlace;