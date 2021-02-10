import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TextFieldInput from "../../common/components/TextFieldInput";
import Menu from "./components/Menu";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="Dashboard">
      <Flex
        marginTop="5rem"
        width="90vh"
        height="45vh"
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
              <Text>👋Hello User, welcome!</Text>
            </Flex>
            <Flex>
              <TextFieldInput
                defaultValue="Search"
                inputHandler={setSearch}
              ></TextFieldInput>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="3xl">
              Favorites
            </Text>
            <Flex justifyContent="space-between">
              <Flex alignItems="center" direction="column">
                <Box width="100px" height="100px" bgColor="orange.200"></Box>
                <Text fontWeight="semibold" fontSize="2xl">
                  All Images
                </Text>
              </Flex>
              <Flex alignItems="center" direction="column">
                <Box width="100px" height="100px" bgColor="orange.200"></Box>
                <Text fontWeight="semibold" fontSize="2xl">
                  All Archives
                </Text>
              </Flex>
              <Flex alignItems="center" direction="column">
                <Box width="100px" height="100px" bgColor="orange.200"></Box>
                <Text fontWeight="semibold" fontSize="2xl">
                  All Documents
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="2xl">Folders</Text>
              <Text fontSize="lg" textColor="blue.400">
                View all
              </Text>
            </Flex>
            <Flex marginTop="1rem">
              <Flex direction="column" marginRight="2rem">
                <svg
                  height="2rem"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <Text fontSize="2xl">Assets</Text>
                <Text fontSize="xl" fontWeight="normal" textColor="gray.400">
                  25 Files
                </Text>
              </Flex>
              <Flex direction="column" marginRight="2rem">
                <svg
                  height="2rem"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <Text fontSize="2xl">Marketing</Text>
                <Text fontSize="xl" fontWeight="normal" textColor="gray.400">
                  25 Files
                </Text>
              </Flex>
              <Flex direction="column">
                <svg
                  height="2rem"
                  width="2rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <Text fontSize="2xl">Personal</Text>
                <Text fontSize="xl" fontWeight="normal" textColor="gray.400">
                  25 Files
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex padding="2rem" width="30%">
          Box3
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
