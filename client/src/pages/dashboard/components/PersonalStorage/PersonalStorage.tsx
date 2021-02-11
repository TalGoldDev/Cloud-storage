import React, { useState } from "react";
import TextFieldInput from "../../../../common/components/TextFieldInput";
import { Flex, Img, Box, Text, Heading } from "@chakra-ui/react";
import Favorites from "./components/Favorites";
import Folders from "./components/Folders";
import Files from "./components/Files";

interface Props {}

const PersonalStorage = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="personal-storage">
      <Flex
        flexShrink={1}
        className="flesboxasc"
        justifyContent="space-between"
        direction="column"
        height="100%"
        width="100%"
      >
        <Flex
          justifyContent="space-between"
          direction={["column", "column", "row", "row"]}
          width="100%"
        >
          <Flex direction="column" marginRight="4vh" width="100%">
            <Heading>My Cloud</Heading>
            <Text marginTop="1vh" textColor="gray.400" fontWeight="medium">
              👋 Hello User, welcome!
            </Text>
          </Flex>
          <Flex width="100%">
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
