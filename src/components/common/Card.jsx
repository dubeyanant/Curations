import { X } from "lucide-react";
import { useSelector } from "react-redux";
import supabase from "../../config/supabaseClient";

const Card = ({ url, name, urlImg, cardId, onDelete }) => {
  const isEditIcon = useSelector((state) => state.isEditIcon);

  const handleDeleteRecord = async () => {
    event.preventDefault();
    const { error } = await supabase.from("data").delete().eq("id", cardId);
    if (error) {
      console.log(error);
    } else {
      console.log("Tile deleted successfully.");
      onDelete(cardId);
    }
  };

  return (
    <a
      href={url}
      className="w-40 h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 drop-shadow-md rounded-lg relative"
    >
      {isEditIcon && (
        <button
          className="absolute -right-4 -top-4 m-2 bg-primary-dark rounded-full"
          onClick={handleDeleteRecord}
        >
          <X />
        </button>
      )}
      <img
        src={urlImg}
        alt={name}
        className="w-40 h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 object-cover rounded-lg"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-grays-transparent from-50% to-grays-black rounded-lg"></div>
      <p className="absolute bottom-0 left-0 text-lg ml-5 mb-3 text-grays-white">
        {name}
      </p>
    </a>
  );
};

export default Card;
