import React from "react";
import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface Props {}

const Files = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1vh" width="auto">
        <Flex justifyContent="space-between" alignItems="center" width="auto">
          <Text fontSize="2xl">Files</Text>
          <Text fontSize="lg" textColor="blue.400">
            View all
          </Text>
        </Flex>
        <Flex paddingBottom="1vh" direction="row" flexWrap="wrap">
          <File />
          <File />
          <File />
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
          width="5.5vh"
          height="5.5vh"
          bgColor="gray.100"
          rounded="2xl"
          verticalAlign="center"
          marginRight="1vh"
        >
          <Img src="/document.png" height="4vh" width="4vh" margin="auto"></Img>
        </Flex>
        <Flex direction="column" width="auto">
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
