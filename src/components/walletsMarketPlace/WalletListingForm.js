import React, { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Fragment } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

const WalletListingForm = (props) => {

  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave?'} />
      <Card>
        <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div>
              <LoadingSpinner />
            </div>
          )}

          <div>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='1' ref={textInputRef}></textarea>
          </div>
          <div>
            <button onClick={finishEnteringHandler}>List Now</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default WalletListingForm;
