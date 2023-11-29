import Tile from "./common/Tile";
import useFetchData from "../assets/useFetchData";
import { useSelector } from "react-redux";
import AddTile from "./common/AddTile";

const TileContainer = ({ containerData, onDelete }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8">
      {containerData.map((item) => (
        <Tile
          key={item.id}
          quote={item.quote}
          author={item.author}
          tileId={item.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

const Quotes = () => {
  const { data, fetchError, handleDelete } = useFetchData();
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const filteredData = data?.filter((item) => item.type === "quote") || [];

  const distributeObjects = (data, totalContainers) => {
    if (!data || data.length === 0 || totalContainers <= 0) {
      return null;
    }

    const containers = Array.from({ length: totalContainers }, () => []);

    data.forEach((item, index) => {
      const containerIndex = index % totalContainers;
      containers[containerIndex].push(item);
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
      {distributedData && distributedData.length > 0 && (
        <div>
          <p className="text-lg mb-12">
            Some quotes that I find very interesting.
          </p>
          {isEditIcon && (
            <div className="mb-6">
              <AddTile />
            </div>
          )}
          <div className="flex flex-wrap justify-between gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            {distributedData.map((container, index) => (
              <TileContainer
                key={index}
                containerData={container}
                containerIndex={index}
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
