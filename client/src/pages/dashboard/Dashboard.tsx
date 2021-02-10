import { Box, Flex, Heading, Img, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import DetailsBar from "./components/DetailsBar/DetailsBar";
import Menu from "./components/Menu";

import PersonalStorage from "./components/PersonalStorage/PersonalStorage";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="Dashboard">
      <Flex
        marginTop="5rem"
        width="110vh"
        height="70vh"
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
          borderRight="2px"
          borderColor="gray.100"
          padding="2rem"
        >
          <PersonalStorage />
        </Flex>
        <Flex width="20%" padding="2rem">
          <DetailsBar />
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
