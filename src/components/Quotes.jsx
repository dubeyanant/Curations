import Tile from "./common/Tile";
import useFetchData from "../assets/useFetchData";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";

const Quotes = () => {
  const { data, fetchError } = useFetchData();
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const filteredData = data
    ? data.filter((item) => item.type === "quote")
    : null;

  console.log(filteredData, fetchError);

  return (
    <>
      {fetchError && <p>Error: {fetchError}</p>}
      {filteredData && (
        <div>
          <p className="text-lg">
            Some movie quotes that I find very interesting.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-5">
            {isEditIcon && (
              <button className="w-52 h-52 shadow-md hover:shadow-2xl rounded-lg flex items-center justify-center">
                <Plus size={40} />
              </button>
            )}
            {filteredData.map((quote) => (
              <Tile key={quote.id} quote={quote.quote} author={quote.author} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Quotes;
