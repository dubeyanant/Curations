import Tile from "./common/Tile";
import quotesJson from "../assets/quotes.json";

const Quotes = () => {
  return (
    <>
      <p className="text-lg">Some movie quotes that I find very interesting.</p>
      <div className="mt-12 grid grid-cols-3 gap-5">
        {quotesJson.map((quote, index) => (
          <Tile key={index} quote={quote.quote} author={quote.author} />
        ))}
      </div>
    </>
  );
};
export default Quotes;
