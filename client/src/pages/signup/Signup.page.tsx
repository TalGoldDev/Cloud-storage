import {
  Box,
  Button,
  Checkbox,
  Heading,
  Image,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import React from "react";
import PasswordFieldInput from "../../common/components/PasswordFieldInput";
import SubmitButton from "../../common/components/SubmitButton/SubmitButton";
import TextFieldInput from "../../common/components/TextFieldInput";
import TermsCheckbox from "./components/TermsCheckbox";

const Signup: React.FC = () => {
  const [userName, setUserName] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  const submitForm = (userName: String, password: String): boolean => {
    console.log("Form Submitted");
    console.log(userName, password);
    return true;
  };

  return (
    <div className="signup">
      <Flex
        rounded="2xl"
        marginTop="2rem"
        bg="white"
        height="60vh"
        width="90vh"
        boxShadow="2xl"
      >
        <Flex
          padding="3rem"
          className="registration-form"
          flexDirection="column"
          width="50%"
        >
          <div>
            <Heading size="3xl">Sign up</Heading>
          </div>
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
                  Sign up with
                </Text>
              </Flex>
              <Flex marginTop="3vh" marginBottom="3vh">
                <Button
                  marginRight="1vh"
                  padding="1.5rem"
                  fontWeight="normal"
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
                  Sign up with Google
                </Button>
                <Button
                  padding="1.5rem"
                  fontWeight="normal"
                  fontSize="medium"
                  bgColor="white"
                  border="2px"
                  borderColor="#f5f5f5"
                  _hover={{ bg: "white", borderColor: "blue.200" }}
                >
                  <Image src="facebook-logo.svg" height="2.1rem"></Image>
                  Sign up with Facebook
                </Button>
              </Flex>
            </Box>
          </div>

          <div className="Registration form">
            <Flex marginBottom="1rem">
              <Box marginRight="1rem">
                <TextFieldInput
                  defaultValue="Name"
                  inputHandler={setUserName}
                />
              </Box>
              <TextFieldInput defaultValue="Email" inputHandler={setUserName} />
            </Flex>
            <PasswordFieldInput
              defaultValue="Password"
              inputHandler={setPassword}
            />
            <TermsCheckbox></TermsCheckbox>
          </div>

          <SubmitButton text="Join"></SubmitButton>

          <div>
            <Flex marginTop="2.5rem">
              <Text marginRight="1rem">Already have an account?</Text>
              <Text textColor="red.300"> Sign in</Text>
            </Flex>
          </div>
        </Flex>

        <Flex width="50%" className="illustration">
          <Img
            alignSelf="center"
            src="illustration.png"
            alt="signup"
            objectFit="cover"
          ></Img>
        </Flex>
      </Flex>
    </div>
  );
};

export default Signup;
