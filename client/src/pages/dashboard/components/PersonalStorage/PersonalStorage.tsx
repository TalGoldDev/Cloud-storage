import React, { useState } from "react";
import TextFieldInput from "../../../../common/components/TextFieldInput";
import { Flex, Img, Box, Text, Heading } from "@chakra-ui/react";
import Favorites from "./components/Favorites";
import Folders from "./components/Folders";
import Files from "./components/Files";

interface Props {}

const PersonalStorage = (props: Props) => {
  const [search, setSearch] = useState<String>("");

  return (
    <div>
      <Flex
        justifyContent="space-between"
        direction="column"
        height="100%"
        width="85%"
      >
        <Flex justifyContent="space-between" direction="row">
          <Flex direction="column" marginRight="3rem">
            <Heading>My Cloud</Heading>
            <Text marginTop="1rem" textColor="gray.400" fontWeight="medium">
              👋 Hello User, welcome!
            </Text>
          </Flex>
          <Flex>
            <TextFieldInput
              defaultValue="Search"
              inputHandler={setSearch}
            ></TextFieldInput>
          </Flex>
        </Flex>
        <Favorites />
        <Folders />
        <Files />
      </Flex>
    </div>
  );
};

export default PersonalStorage;
