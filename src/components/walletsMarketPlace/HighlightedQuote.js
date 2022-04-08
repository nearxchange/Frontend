
const HighlightedQuote = (props) => {
  return (
    <figure>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
