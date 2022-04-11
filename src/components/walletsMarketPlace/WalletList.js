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
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
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
    </Fragment>
  );
};

export default WalletList;
