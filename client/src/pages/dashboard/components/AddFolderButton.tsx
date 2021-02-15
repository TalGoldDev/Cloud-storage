import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { database } from "../../../firebase";

interface Props {}

const AddFolderButton = (props: Props) => {
  const openModal = () => {
    console.log("opening modal");
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("handled submit");
    // create a folder in the database.
    database.folders.add({
      name: name,
      //parentId,
      //userId, - use Redux to store email as user ID.
      //path,
      //createdAt,
    });

    setName("");
    closeModal();
  };

  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  return (
    <>
      <Button
        width={["100%", "100%", "100%", "100%", "100%"]}
        height="4vh"
        bgColor="blue.400"
        textColor="white"
        marginX="auto"
        onClick={openModal}
      >
        Create Folder
      </Button>
      <Modal isOpen={open} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                placeholder="Folder name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter alignSelf="center" width="100%">
            <Button
              colorScheme="blue"
              mr={3}
              width="100%"
              onClick={() => {
                handleSubmit();
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddFolderButton;
