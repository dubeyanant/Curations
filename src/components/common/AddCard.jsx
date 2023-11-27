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
  FormHelperText,
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

  const isNameValid = /[a-zA-Z]/.test(websiteName);
  const isAddressValid = /^https:\/\/.*/i.test(websiteUrl);
  const isImageAddressValid =
    /^https:\/\/images\.(unsplash\.com\/photo-|pexels\.com\/photos\/).*/i.test(
      imageUrl
    );

  const [nameBlurred, setNameBlurred] = useState(false);
  const [addressBlurred, setAddressBlurred] = useState(false);
  const [imageAddressBlurred, setImageAddressBlurred] = useState(false);

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
              <FormControl
                isRequired
                isInvalid={!isNameValid && nameBlurred && websiteName !== ""}
                onBlur={() => setNameBlurred(true)}
              >
                <FormLabel>Website Name</FormLabel>
                <Input
                  placeholder="Curations"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                />
              </FormControl>
              <FormControl
                mt={4}
                isRequired
                isInvalid={
                  !isAddressValid && addressBlurred && websiteUrl !== ""
                }
                onBlur={() => setAddressBlurred(true)}
              >
                <FormLabel>Website URL</FormLabel>
                <Input
                  placeholder="https://curations.vercel.app"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </FormControl>
              <FormControl
                mt={4}
                isRequired
                isInvalid={
                  !isImageAddressValid && imageAddressBlurred && imageUrl !== ""
                }
                onBlur={() => setImageAddressBlurred(true)}
              >
                <FormLabel>Image URL</FormLabel>
                <Input
                  placeholder="https://images.unsplash.com/..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <FormHelperText>use only Unsplash or Pexels</FormHelperText>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="orange"
                mr={3}
                onClick={handleSave}
                isDisabled={
                  !isNameValid || !isAddressValid || !isImageAddressValid
                }
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

export default AddCard;
