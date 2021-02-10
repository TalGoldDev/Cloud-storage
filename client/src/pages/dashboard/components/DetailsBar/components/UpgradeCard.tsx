import { Flex, Img, Button, Text, Box } from "@chakra-ui/react";
import React from "react";

interface Props {}

const UpgradeCard = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1vh" alignItems="center" width="100%">
        <Flex direction="column" alignItems="center" alignContent="center">
          <Img
            src="/upgradeIllustration.png"
            width={["80%", "80%", "80%", "80%", "100%"]}
            objectFit="cover"
            display={["block", "block", "block", "block", "block"]}
          ></Img>
          <Text
            marginTop="1vh"
            fontWeight="bold"
            fontSize="2xl"
            textColor="blue.500"
          >
            Upgrade account!
          </Text>
        </Flex>
        <Flex marginTop="1vh">
          <Text
            textAlign="center"
            // display={["none", "none", "none", "none", "none", "none", "block"]}
            textColor="blue.400"
          >
            5 integrations, 30 team members, advanced features for teams.
          </Text>
        </Flex>
        <Flex
          marginTop="1vh"
          width="100%"
          alignContent="center"
          alignItems="center"
        >
          <Button
            width={["100%", "100%", "100%", "10vh", "10vh"]}
            height="4vh"
            bgColor="blue.400"
            textColor="white"
            marginX="auto"
          >
            Upgrade
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default UpgradeCard;
