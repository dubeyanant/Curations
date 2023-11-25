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

const AddCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State variables to track the input values
  const [websiteName, setWebsiteName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSave = async () => {
    // Log the values in the console
    console.log("Website Name:", websiteName);
    console.log("Website URL:", websiteUrl);
    console.log("Image URL:", imageUrl);

    // Additional logic to save the values if needed
    if (!websiteName || !websiteUrl || !imageUrl) {
      return;
    }

    // Insert Data
    const { error } = await supabase.from("data").insert({
      url: websiteUrl,
      urlImg: imageUrl,
      name: websiteName,
      type: "website",
    });

    if (error) {
      console.log(error);
    }

    // Refresh the page so the new content is loaded
    window.location.reload();

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
            <ModalHeader>Add Website Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Website Name</FormLabel>
                <Input
                  placeholder="Curations"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Website URL</FormLabel>
                <Input
                  placeholder="https://curations.vercel.app"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input
                  placeholder="https://images.unsplash.com/..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
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

export default AddCard;
