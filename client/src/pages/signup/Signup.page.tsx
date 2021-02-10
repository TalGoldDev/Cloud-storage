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
import RegistrationForm from "./components/RegistrationForm";
import SocialSignup from "./components/SocialSignup";
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
        height="725px"
        width={["95%", "95%", "75vh", "90vh"]}
        boxShadow="2xl"
        direction={["column", "column", "row", "row"]}
      >
        <Flex
          padding="3rem"
          className="registration-form"
          flexDirection="column"
          width={["100%", "100%", "50%", "50%"]}
        >
          <div>
            <Heading size="3xl">Sign up</Heading>
          </div>

          <SocialSignup />

          <RegistrationForm
            setUserName={setUserName}
            setPassword={setPassword}
          />
          <TermsCheckbox />

          <SubmitButton text="Join" />

          <div>
            <Flex
              marginTop="2rem"
              direction={["column", "column", "row", "row"]}
            >
              <Text marginRight="1rem" textAlign="center">
                Already have an account?
              </Text>
              <Text textColor="red.300" textAlign="center">
                Sign in
              </Text>
            </Flex>
          </div>
        </Flex>

        <Img
          display={["none", "none", "block", "block"]}
          className="illustration"
          width="50%"
          alignSelf="center"
          src="illustration.png"
          alt="signup"
          objectFit="cover"
        ></Img>
      </Flex>
    </div>
  );
};

export default Signup;
