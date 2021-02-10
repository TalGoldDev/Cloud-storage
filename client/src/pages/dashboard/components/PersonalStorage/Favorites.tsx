import React from "react";
import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface Props {}

const Favorites = (props: Props) => {
  return (
    <div>
      <Flex direction="column">
        <Text fontWeight="bold" fontSize="3xl">
          Favorites
        </Text>
        <Flex justifyContent="space-between" direction="row">
          <Flex alignItems="center" direction="column">
            <Flex
              width="12rem"
              height="12rem"
              bgColor="#fef1e9"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1rem" paddingRight="1rem">
                <svg
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </Box>
              <Img
                src="/pictures.png"
                width="8rem"
                height="8rem"
                marginW="auto"
              ></Img>
            </Flex>
            <Text fontWeight="semibold" fontSize="2xl" marginTop="1rem">
              All Images
            </Text>
          </Flex>

          <Flex alignItems="center" direction="column">
            <Flex
              width="12rem"
              height="12rem"
              bgColor="#e9f1f3"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1rem" paddingRight="1rem">
                <svg
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </Box>
              <Img
                src="/folders.png"
                width="8rem"
                height="8rem"
                marginW="auto"
              ></Img>
            </Flex>
            <Text fontWeight="semibold" fontSize="2xl" marginTop="1rem">
              All Archives
            </Text>
          </Flex>
          <Flex alignItems="center" direction="column">
            <Flex
              width="12rem"
              height="12rem"
              bgColor="#e9efff"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1rem" paddingRight="1rem">
                <svg
                  height="1rem"
                  width="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </Box>
              <Img
                src="/document.png"
                width="8rem"
                height="8rem"
                marginW="auto"
              ></Img>
            </Flex>
            <Text fontWeight="semibold" fontSize="2xl" marginTop="1rem">
              All Documents
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Favorites;
