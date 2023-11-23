const Tile = ({ quote, author }) => {
  return (
    <div className="drop-shadow-md rounded-lg py-2 px-4 bg-primary-hover">
      <p className="font-bold mb-2">{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

export default Tile;
