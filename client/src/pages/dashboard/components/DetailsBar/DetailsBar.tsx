import { Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "./components/progressbar/ProgressBar";
import StorageInfo from "./components/StorageInfo";
import UpgradeCard from "./components/UpgradeCard";

interface Props {}

const DetailsBar = (props: Props) => {
  return (
    <div>
      <Flex direction="column" width="100%" height="100%">
        <Flex justifyContent="space-between" direction="row" width="100%">
          <Flex direction="column">
            <Text fontWeight="semibold" fontSize="3xl" textColor="blue.400">
              0.4GB
            </Text>
            <Text fontWeight="medium">Used</Text>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="semibold" fontSize="3xl" textColor="gray.400">
              1GB
            </Text>
            <Text textColor="blue.400" fontWeight="medium">
              Upgrade
            </Text>
          </Flex>
        </Flex>
        <ProgressBar />

        <StorageInfo />

        <UpgradeCard />
      </Flex>
    </div>
  );
};

export default DetailsBar;
