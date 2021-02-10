import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Menu: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Flex direction="column" justifyContent="space-between">
        <Flex height="20%">
          <Heading>Logo</Heading>
        </Flex>

        <Flex
          direction="column"
          justifyContent="space-between"
          height="70%"
          marginTop="2rem"
        >
          <div>
            <Flex direction="column">
              <a>Cloud</a>
              <Spacer marginTop="2rem" />

              <a>Shared</a>
              <Spacer marginTop="2rem" />

              <a>Favorites</a>
              <Spacer marginTop="2rem" />

              <a>Trash Bin</a>
            </Flex>
          </div>
          <div>
            <Flex direction="column" marginTop="3rem">
              <a>Help</a>
              <Spacer marginTop="2rem" />
              <a>Settings</a>
            </Flex>
          </div>
        </Flex>
        <Flex marginTop="4rem" height="10%">
          Logo2
        </Flex>
      </Flex>
    </div>
  );
};

export default Menu;
