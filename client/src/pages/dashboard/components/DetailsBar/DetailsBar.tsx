import { Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "./components/progressbar/ProgressBar";
import StorageInfo from "./components/StorageInfo";
import UpgradeCard from "./components/UpgradeCard";

interface Props {}

const DetailsBar = (props: Props) => {
  return (
    <div>
      <Flex direction="column">
        <Flex justifyContent="space-between" direction="row">
          <div>
            <Text fontWeight="semibold" fontSize="3xl" textColor="blue.400">
              0.4GB
            </Text>
            <Text fontWeight="medium">Used</Text>
          </div>
          <div>
            <Text fontWeight="semibold" fontSize="3xl" textColor="gray.400">
              1GB
            </Text>
            <Text textColor="blue.400" fontWeight="medium">
              Upgrade
            </Text>
          </div>
        </Flex>
        <ProgressBar />

        <StorageInfo />

        <UpgradeCard />
      </Flex>
    </div>
  );
};

export default DetailsBar;
