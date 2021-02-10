import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Spacer,
  Text,
} from "@chakra-ui/react";
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
        margin="auto"
        width={["90%", "90%", "95%", "95%", "100%"]}
        height="100%"
        background="white"
        rounded="2xl"
        boxShadow="lg"
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Flex
          width={["100%", "100%", "100%", "15%", "15%"]}
          borderRight={["0px", "0px", "0px", "2px", "2px"]}
          paddingRight="2vh"
          borderColor={[
            "gray.100",
            "gray.100",
            "gray.100",
            "gray.100",
            "gray.100",
          ]}
          padding="3vh"
        >
          <Box width={["100%", "100%", "100%", "15%", "15%"]}>
            <Menu />
          </Box>
        </Flex>
        <Box
          padding="3vh"
          marginRight="1vh"
          width={["100%", "100%", "100%", "60%"]}
          minHeight="100%"
        >
          <PersonalStorage />
        </Box>
        <Flex
          width={["100%", "100%", "100%", "25%"]}
          borderLeft="2px"
          borderColor="gray.100"
          padding="3vh"
        >
          <DetailsBar />
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
