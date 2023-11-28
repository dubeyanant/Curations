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

    // Insert Data
    const { error } = await supabase.from("data").insert({
      author: authorName ? authorName : "Anonymous",
      quote: quote,
      type: "quote",
    });

    if (error) {
      console.log(error);
    }

    // Refresh the page so the new content is loaded
    window.location.reload();

    // Close the modal
    onClose();
  };

  const isQuoteValid = quote.trim() !== "";
  const [quoteBlurred, setQuoteBlurred] = useState(false);

  return (
    <div>
      <button
        onClick={onOpen}
        className="w-52 h-36 max-w-[200px] shadow-md hover:shadow-2xl rounded-lg flex items-center justify-center"
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
              <FormControl
                isRequired
                isInvalid={!isQuoteValid && quoteBlurred && quote !== ""}
                onBlur={() => setQuoteBlurred(true)}
              >
                <FormLabel>Quote</FormLabel>
                <Input
                  placeholder="A rose by any other name would smell as sweet."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Author Name</FormLabel>
                <Input
                  placeholder="William Shakespeare"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="orange"
                mr={3}
                onClick={handleSave}
                isDisabled={!isQuoteValid}
              >
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
