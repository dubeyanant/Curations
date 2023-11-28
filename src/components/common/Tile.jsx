import { X } from "lucide-react";
import { useSelector } from "react-redux";
import supabase from "../../config/supabaseClient";

const Tile = ({ quote, author, tileId, onDelete }) => {
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const handleDeleteRecord = async () => {
    const { error } = await supabase.from("data").delete().eq("id", tileId);
    if (error) {
      console.log(error);
    } else {
      console.log("Tile deleted successfully.");
      onDelete(tileId);
    }
  };

  return (
    <div className="relative drop-shadow-md rounded-lg py-2 px-4 bg-primary-hover max-w-[200px] self-start">
      {isEditIcon && (
        <button
          className="absolute -right-4 -top-4 m-2 bg-primary-dark rounded-full"
          onClick={handleDeleteRecord}
        >
          <X />
        </button>
      )}
      <p className="font-bold mb-2">{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

export default Tile;
