import Card from "./common/Card";
import useFetchData from "../assets/useFetchData";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";

const Websites = () => {
  const { data, fetchError } = useFetchData();
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
          <div className="mt-12 grid grid-cols-3 gap-5">
            {isEditIcon && (
              <button className="w-52 h-52 shadow-md hover:shadow-2xl rounded-lg flex items-center justify-center">
                <Plus size={40} />
              </button>
            )}
            {filteredData.map((website) => (
              <Card
                key={website.id}
                url={website.url}
                name={website.name}
                urlImg={website.urlImg}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Websites;
