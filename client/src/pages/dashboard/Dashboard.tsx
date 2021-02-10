import { Box, Flex, Heading, Img, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TextFieldInput from "../../common/components/TextFieldInput";
import Menu from "./components/Menu";
import Favorites from "./components/PersonalStorage/Favorites";
import Folders from "./components/PersonalStorage/Folders";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="Dashboard">
      <Flex
        marginTop="5rem"
        width="100vh"
        height="60vh"
        background="white"
        rounded="2xl"
        boxShadow="lg"
      >
        <Flex
          width="15%"
          borderRight="2px"
          borderColor="gray.100"
          padding="2rem"
        >
          <Menu />
        </Flex>
        <Flex
          width="60%"
          padding="2rem"
          justifyContent="space-between"
          direction="column"
          borderRight="2px"
          borderColor="gray.100"
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
        </Flex>
        <Flex padding="2rem" width="30%">
          Box3
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
