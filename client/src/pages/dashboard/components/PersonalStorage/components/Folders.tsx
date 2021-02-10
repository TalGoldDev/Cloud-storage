import { Flex, Img, Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Folders = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1vh">
        <Flex justifyContent="space-between" width="auto" alignItems="center">
          <Text fontSize="2xl">Folders</Text>
          <Text fontSize="lg" textColor="blue.400">
            View all
          </Text>
        </Flex>
        <Flex
          marginTop="1vh"
          alignItems="center"
          direction="row"
          flexWrap="wrap"
        >
          <Flex
            justifyContent="space-between"
            marginRight="3vh"
            marginBottom="1vh"
            border="2px"
            rounded="2xl"
            padding="1vh"
            borderColor="gray.100"
            width={["100%", "18vh", "18vh", "18vh"]}
          >
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="4vh" width="4vh"></Img>
              <Text fontSize="xl">Assets</Text>
              <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                25 Files
              </Text>
            </Flex>
            <Box color="gray.300">
              <svg
                width="3vh"
                height="3vh"
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
            marginRight="3vh"
            marginBottom="1vh"
            border="2px"
            rounded="2xl"
            padding="1vh"
            borderColor="gray.100"
            width={["100%", "18vh", "18vh", "18vh"]}
          >
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="4vh" width="4vh"></Img>
              <Text fontSize="xl">Marketing</Text>
              <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                25 Files
              </Text>
            </Flex>
            <Box color="gray.300">
              <svg
                width="3vh"
                height="3vh"
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
            marginBottom="1vh"
            border="2px"
            rounded="2xl"
            padding="1vh"
            marginRight="3vh"
            borderColor="gray.100"
            width={["100%", "18vh", "18vh", "18vh"]}
          >
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="4vh" width="4vh"></Img>
              <Text fontSize="xl">Personal</Text>
              <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
                25 Files
              </Text>
            </Flex>
            <Box color="gray.300">
              <svg
                width="3vh"
                height="3vh"
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
    </div>
  );
};

export default Folders;
