import React from "react";
import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface Props {}

const Favorites = (props: Props) => {
  return (
    <div>
      <Flex direction="column" width="100%">
        <Text fontWeight="bold" fontSize="3xl">
          Favorites
        </Text>
        <Flex
          direction={["column", "row"]}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "flex-start",
          ]}
          width="auto"
        >
          <Flex
            marginTop="1vh"
            alignItems="center"
            direction={["row", "column", "column", "column"]}
            marginRight="3vh"
          >
            <Flex
              width={["8vh", "8vh", "15vh", "15vh"]}
              height={["8vh", "8vh", "15vh", "15vh"]}
              bgColor="#fef1e9"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1vh" paddingRight="1vh">
                <svg
                  height="1.5vh"
                  width="1.5vh"
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
                marginTop={["0vh", "0vh", "1vh"]}
                width={["5vh", "5vh", "8vh", "8vh"]}
                height={["5vh", "5vh", "8vh", "8vh"]}
                marginWidth="auto"
              ></Img>
            </Flex>
            <Text
              fontWeight="semibold"
              fontSize={["lg", "xl", "2xl", "2xl"]}
              marginTop="1vh"
              textAlign="center"
              marginLeft={["1vh", "0vh"]}
            >
              All Images
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            marginTop="1vh"
            direction={["row", "column", "column", "column"]}
            marginRight="3vh"
          >
            <Flex
              width={["8vh", "8vh", "15vh", "15vh"]}
              height={["8vh", "8vh", "15vh", "15vh"]}
              bgColor="#e9f1f3"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1vh" paddingRight="1vh">
                <svg
                  height="1.5vh"
                  width="1.5vh"
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
                marginTop={["0vh", "0vh", "1vh"]}
                width={["5vh", "5vh", "8vh", "8vh"]}
                height={["5vh", "5vh", "8vh", "8vh"]}
                marginWidth="auto"
              ></Img>
            </Flex>
            <Text
              fontWeight="semibold"
              fontSize={["lg", "xl", "2xl", "2xl"]}
              marginTop="1vh"
              textAlign="center"
              marginLeft={["1vh", "0vh"]}
            >
              All Archives
            </Text>
          </Flex>
          <Flex
            marginTop="1vh"
            alignItems="center"
            direction={["row", "column", "column", "column"]}
            marginRight="3vh"
          >
            <Flex
              width={["8vh", "8vh", "15vh", "15vh"]}
              height={["8vh", "8vh", "15vh", "15vh"]}
              bgColor="#e9efff"
              rounded="xl"
              alignItems="center"
              direction="column"
            >
              <Box alignSelf="flex-end" paddingTop="1vh" paddingRight="1vh">
                <svg
                  height="1.5vh"
                  width="1.5vh"
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
                marginTop={["0vh", "0vh", "1vh"]}
                width={["5vh", "5vh", "8vh", "8vh"]}
                height={["5vh", "5vh", "8vh", "8vh"]}
                marginWidth="auto"
              ></Img>
            </Flex>
            <Text
              fontWeight="semibold"
              fontSize={["lg", "xl", "2xl", "2xl"]}
              marginTop="1vh"
              textAlign="center"
              marginLeft={["1vh", "0vh"]}
            >
              All Documents
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Favorites;
