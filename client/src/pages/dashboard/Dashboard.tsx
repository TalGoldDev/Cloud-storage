import { Box, Flex, Heading, Img, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TextFieldInput from "../../common/components/TextFieldInput";
import Menu from "./components/Menu";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState<String>("");

  return (
    <div className="Dashboard">
      <Flex
        marginTop="5rem"
        width="95vh"
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
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="3xl">
              Favorites
            </Text>
            <Flex justifyContent="space-between" direction="row">
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
              <Flex
                justifyContent="space-between"
                marginRight="2rem"
                border="2px"
                rounded="2xl"
                padding="0.8rem"
                borderColor="gray.100"
                width="12rem"
              >
                <Flex direction="column">
                  <Img src="/foldericon.png" height="3rem" width="3rem"></Img>
                  <Text fontSize="xl">Assets</Text>
                  <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                    25 Files
                  </Text>
                </Flex>
                <Box color="gray.300">
                  <svg
                    width="2rem"
                    height="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                marginRight="2rem"
                border="2px"
                rounded="2xl"
                padding="0.8rem"
                borderColor="gray.100"
                width="12rem"
              >
                <Flex direction="column">
                  <Img src="/foldericon.png" height="3rem" width="3rem"></Img>
                  <Text fontSize="xl">Marketing</Text>
                  <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                    25 Files
                  </Text>
                </Flex>
                <Box color="gray.300">
                  <svg
                    width="2rem"
                    height="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                border="2px"
                rounded="2xl"
                padding="0.8rem"
                borderColor="gray.100"
                width="12rem"
              >
                <Flex direction="column">
                  <Img src="/foldericon.png" height="3rem" width="3rem"></Img>
                  <Text fontSize="xl">Personal</Text>
                  <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                    25 Files
                  </Text>
                </Flex>
                <Box color="gray.300">
                  <svg
                    width="2rem"
                    height="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Box>
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
