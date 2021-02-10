import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

interface Props {}

const SocialLogin: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Box marginTop="3vh">
        <Flex>
          <Text
            textColor="red.400"
            fontWeight="extrabold"
            lineHeight="1vh"
            marginRight="1vh"
          >
            _______
          </Text>
          <Text textColor="red.400" fontWeight="bold">
            Log in with
          </Text>
        </Flex>
        <Flex marginTop="3vh" marginBottom="3vh">
          <Button
            width="50%"
            marginRight="1vh"
            padding="1.5rem"
            fontWeight="medium"
            fontSize="medium"
            bgColor="white"
            border="2px"
            borderColor="#f5f5f5"
            _hover={{ bg: "white", borderColor: "blue.200" }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              height="1.2rem"
              width="1.2rem"
              marginRight="1rem"
            ></Image>
            Google
          </Button>
          <Button
            width="50%"
            padding="1.5rem"
            fontWeight="medium"
            fontSize="medium"
            bgColor="white"
            border="2px"
            borderColor="#f5f5f5"
            _hover={{ bg: "white", borderColor: "blue.200" }}
          >
            <Image src="facebook-logo.svg" height="2.1rem"></Image>
            Facebook
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default SocialLogin;
