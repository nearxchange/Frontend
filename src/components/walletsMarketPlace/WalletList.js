import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import WalletItem from './WalletItem';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const WalletList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    })
  };

  return (
    <Fragment>
      <div>
        <button className='ml-36 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-blue-600 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className='grid grid-cols-2 mx-16 gap-y-8 px-28'>
        {sortedQuotes.map((quote) => (
          <div>
            <WalletItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              price={quote.price}
              text={quote.text}
            />
            <hr className='w-10/12 mx-auto' />
          </div>
        ))}
      </ul>
    </Fragment >
  );
};

export default WalletList;
