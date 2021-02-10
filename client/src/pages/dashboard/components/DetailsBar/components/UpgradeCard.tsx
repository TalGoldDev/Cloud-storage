import { Flex, Img, Button, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const UpgradeCard = (props: Props) => {
  return (
    <div>
      <Flex direction="column" marginTop="1rem" alignItems="center">
        <Flex direction="column" alignItems="center">
          <Img src="/upgradeIllustration.png"></Img>
          <Text
            marginTop="1rem"
            fontWeight="bold"
            fontSize="2xl"
            textColor="blue.500"
          >
            Upgrade account!
          </Text>
        </Flex>
        <Flex marginTop="0.5rem">
          <Text textAlign="center" textColor="blue.400">
            5 integrations, 30 team members, advanced features for teams.
          </Text>
        </Flex>
        <Flex marginTop="1rem">
          <Button
            width="10rem"
            height="3rem"
            bgColor="blue.400"
            textColor="white"
          >
            Upgrade
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default UpgradeCard;
