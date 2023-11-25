import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import supabase from "../../config/supabaseClient";

const AddTile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State variables to track the input values
  const [authorName, setAuthorName] = useState("");
  const [quote, setQuote] = useState("");

  const handleSave = async () => {
    // Log the values in the console
    console.log("Author Name:", authorName);
    console.log("Quote:", quote);

    // Additional logic to save the values if needed
    if (!authorName || !quote) {
      return;
    }

    // Insert Data
    const { error } = await supabase.from("data").insert({
      author: authorName,
      quote: quote,
      type: "quote",
    });

    if (error) {
      console.log(error);
    }

    // Close the modal
    onClose();
  };

  return (
    <div>
      <button
        onClick={onOpen}
        className="w-52 h-52 shadow-md hover:shadow-2xl rounded-lg flex items-center justify-center"
      >
        <Plus size={40} />
      </button>

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Quote Tile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Quote</FormLabel>
                <Input
                  placeholder="A rose by any other name would smell as sweet."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Author Name</FormLabel>
                <Input
                  placeholder="William Shakespeare"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="orange" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default AddTile;
