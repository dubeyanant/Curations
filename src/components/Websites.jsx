import Card from "./common/Card";
import useFetchData from "../assets/useFetchData";
import { useSelector } from "react-redux";
import AddCard from "./common/AddCard";

const Websites = () => {
  const { data, fetchError, handleDelete } = useFetchData();
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const filteredData = data
    ? data.filter((item) => item.type === "website")
    : null;

  console.log(filteredData, fetchError);

  return (
    <>
      {fetchError && <p>Error: {fetchError}</p>}

      {filteredData && (
        <div>
          <p className="text-lg">
            These are some cool websites that I like. This presents several fun
            and useful sites which you might want to check out.
          </p>
          <div className="mt-12 flex justify-start flex-wrap gap-3">
            {isEditIcon && <AddCard />}
            {filteredData.map((website) => (
              <Card
                key={website.id}
                url={website.url}
                name={website.name}
                urlImg={website.urlImg}
                cardId={website.id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Websites;
