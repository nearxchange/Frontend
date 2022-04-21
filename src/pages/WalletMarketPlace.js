import React, { Fragment } from 'react'

import WalletList from '../components/walletsMarketPlace/WalletList';
import SearchBox from '../components/comments/SearchBox';
import MatchingWallet from '../components/walletsMarketPlace/MatchingWallet';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'bob_seller.testnet', price: 10, text: 'alice.testnet' },
	{ id: 'q2', author: 'peter_seller1.testnet', price: 10, text: 'wallet.testnet' },
	{ id: 'q3', author: 'peter_seller1.testnet', price: 10, text: 'wallet.testnet' },
	{ id: 'q4', author: 'peter_seller1.testnet', price: 10, text: 'wallet.testnet' },
	{ id: 'q5', author: 'peter_seller1.testnet', price: 10, text: 'wallet.testnet' },
];


const WalletMarketPlace = () => {
	return (
		<Fragment>
			<SearchBox />
			<MatchingWallet />
			<hr className='w-10/12 mx-auto mt-10 mb-5 border-gray-400' />
			<WalletList quotes={DUMMY_QUOTES} />
		</Fragment>
	)

};

export default WalletMarketPlace;