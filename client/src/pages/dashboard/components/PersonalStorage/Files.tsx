import React from "react";
import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface Props {}

const Files = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl">Files</Text>
          <Text fontSize="lg" textColor="blue.400">
            View all
          </Text>
        </Flex>
        <Flex
          overflowX="scroll"
          css={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          <Box width="33%">
            <File />
          </Box>
          <Box width="33%">
            <File />
          </Box>
          <Box width="33%">
            <File />
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

interface Props {}

const File = (props: Props) => {
  return (
    <div>
      <Flex marginRight="2rem" rounded="2xl" paddingTop="1rem" width="auto">
        <Flex
          width="4rem"
          height="4rem"
          bgColor="gray.100"
          rounded="2xl"
          verticalAlign="center"
          marginRight="1rem"
        >
          <Img
            src="/document.png"
            height="3rem"
            width="3rem"
            margin="auto"
          ></Img>
        </Flex>
        <Flex direction="column">
          <Text fontSize="xl">Abstract.doc</Text>
          <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
            Added today
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Files;
