import { Plus } from "lucide-react";
import { useState } from "react";

const AddCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="w-52 h-52 shadow-md hover:shadow-2xl rounded-lg flex items-center justify-center"
      >
        <Plus size={40} />
      </button>

      {modal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen h-screen z-10">
          <div
            onClick={toggleModal}
            className="fixed top-0 right-0 bottom-0 left-0 bg-grays-black bg-opacity-75 w-screen h-screen"
          ></div>
          <div className="absolute top-1/2 left-1/2 bg-grays-white p-5 -translate-y-2/4 -translate-x-2/4">
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              distinctio possimus voluptatum ipsam aperiam iste rem obcaecati
              odio? Quaerat, dolor cumque! Nam facilis quo illum libero magni
              error esse id hic facere non, perferendis ullam! Corporis
              accusantium vel totam, assumenda enim omnis illo dolor
              exercitationem veritatis dicta quibusdam doloremque consequatur.
            </p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
