import React from 'react';
import { useHistory } from "react-router-dom";
import WalletListingForm from '../components/walletsMarketPlace/WalletListingForm';

const WalletListing = () => {
	const history = useHistory();

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);

		history.push('/walletMarketPlace');
	}

	return (
		<WalletListingForm onAddQuote={addQuoteHandler} />
	);
}

export default WalletListing;