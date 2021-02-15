import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import AddFolderButton from "./AddFolderButton";

interface Props {}

const Menu: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Flex
        direction={["row", "row", "row", "column", "column"]}
        justifyContent="space-between"
        width="100%"
      >
        <Flex height="auto" marginRight="2vh">
          <Heading>Logo</Heading>
        </Flex>

        <Flex
          direction={["row", "row", "row", "column", "column"]}
          justifyContent="space-between"
          height="100%"
          marginTop={["1vh", "1vh", "1vh", "3vh", "3vh"]}
        >
          <div>
            <Flex
              direction={["row", "row", "row", "column", "column"]}
              display={["none", "none", "none", "block", "block"]}
            >
              <Flex alignItems="center" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    height="2vh"
                    width="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Cloud</Text>
                </a>
              </Flex>
              <Spacer marginTop="3vh" />
              <Flex alignItems="center" textColor="gray.500" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    height="2vh"
                    width="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Shared</Text>
                </a>
              </Flex>
              <Spacer marginTop="3vh" />

              <Flex alignItems="center" textColor="gray.500" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    height="2vh"
                    width="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Favorites</Text>
                </a>
              </Flex>
              <Spacer marginTop="3vh" />
              <Flex alignItems="center" textColor="gray.500" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    height="2vh"
                    width="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Trash Bin</Text>
                </a>
              </Flex>
            </Flex>
          </div>
          <div>
            <Flex
              direction={["row", "row", "row", "column", "column"]}
              marginTop={["0.5vh", "0.5vh", "0.5vh", "4vh", "4vh"]}
            >
              <Flex alignItems="center" textColor="gray.500" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    width="2vh"
                    height="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Help</Text>
                </a>
              </Flex>
              <Spacer marginTop={["1vh", "1vh", "1vh", "3vh", "3vh"]} />
              <Flex alignItems="center" textColor="gray.500" marginRight="1vh">
                <Box marginRight="1vh">
                  <svg
                    height="2vh"
                    width="2vh"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Box>
                <a>
                  <Text fontWeight="semibold">Settings</Text>
                </a>
              </Flex>
            </Flex>
          </div>
        </Flex>
        <Flex marginTop="5vh" display="block" height="auto" width="10vw">
          <Flex
            marginTop="1vh"
            width="100%"
            alignContent="center"
            alignItems="center"
          >
            <AddFolderButton />
          </Flex>
          <Flex
            marginTop="1vh"
            width="100%"
            alignContent="center"
            alignItems="center"
          >
            <Button
              width={["100%", "100%", "100%", "100%", "100%"]}
              height="4vh"
              bgColor="blue.400"
              textColor="white"
              marginX="auto"
            >
              Upload File
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Menu;
