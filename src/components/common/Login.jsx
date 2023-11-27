import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Login = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // Reset state when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setUsername("");
      setPassword("");
    }
  }, [isOpen]);

  const handleLogin = () => {
    onLogin(username, password);
    onClose();
  };

  const isUsernameValid = /^[a-z]{3,}$/.test(username);
  const isPasswordValid = password.trim().length >= 3;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Login Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired isInvalid={!isUsernameValid}>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormHelperText>minimum three smallcase characters</FormHelperText>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={!isPasswordValid}>
            <FormLabel>Password</FormLabel>

            <InputGroup size="md">
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText>minimum three characters</FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="orange"
            mr={3}
            onClick={handleLogin}
            isDisabled={!isUsernameValid || !isPasswordValid}
          >
            Login
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Login;
