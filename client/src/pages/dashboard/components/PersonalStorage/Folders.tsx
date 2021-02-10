import { Flex, Img, Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Folders = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1rem">
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
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="2.5rem" width="2.5rem"></Img>
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
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="2.5rem" width="2.5rem"></Img>
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
            <Flex direction="column" justifyContent="space-between">
              <Img src="/folder.png" height="2.5rem" width="2.5rem"></Img>
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
    </div>
  );
};

export default Folders;
