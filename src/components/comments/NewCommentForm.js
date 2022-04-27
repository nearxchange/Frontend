import { useRef } from 'react';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div>
        <button>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
