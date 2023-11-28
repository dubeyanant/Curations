import Tile from "./common/Tile";
import useFetchData from "../assets/useFetchData";
import { useSelector } from "react-redux";
import AddTile from "./common/AddTile";

const Quotes = () => {
  const { data, fetchError, handleDelete } = useFetchData();
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const filteredData = data?.filter((item) => item.type === "quote") || [];

  const distributeObjects = (data, totalContainers) => {
    if (!data || data.length === 0 || totalContainers <= 0) {
      return null;
    }

    const totalObjects = data.length;
    const baseObjectsPerContainer = Math.floor(totalObjects / totalContainers);
    const remainder = totalObjects % totalContainers;

    const containers = Array.from({ length: totalContainers }, (_, i) => {
      const containerSize = baseObjectsPerContainer + (i < remainder ? 1 : 0);
      return data.slice(i * containerSize, (i + 1) * containerSize);
    });

    return containers;
  };

  const distributedData = distributeObjects(filteredData, 4);

  if (distributedData) {
    distributedData.forEach((container, index) => {
      console.log(`filteredData${index + 1}:`, container);
    });
  } else {
    console.log("No data to distribute.");
  }

  return (
    <>
      {fetchError && <p>Error: {fetchError}</p>}
      {filteredData.length > 0 && (
        <div>
          <p className="text-lg">Some quotes that I find very interesting.</p>
          <div className="mt-12 flex justify-start flex-wrap gap-6">
            {isEditIcon && <AddTile />}
            {filteredData.map((quote) => (
              <Tile
                key={quote.id}
                quote={quote.quote}
                author={quote.author}
                tileId={quote.id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Quotes;
