import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import React from "react";
import PasswordFieldInput from "../../common/components/PasswordFieldInput";
import TextFieldInput from "../../common/components/TextFieldInput";

const Signup: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const handleClick = (): void => setShow(!show);

  const submitForm = (userName: String, password: String): boolean => {
    console.log("Form Submitted");
    console.log(userName, password);
    return true;
  };

  return (
    <div className="signup">
      <Flex
        border="2px"
        rounded="2xl"
        padding="2rem"
        marginTop="2rem"
        borderColor="gray.300"
      >
        <div className="title">
          <Heading as="h2" size="2xl" marginBottom="1rem" textAlign="center">
            Sign Up
          </Heading>

          <div className="signup-box">
            {/* Username Input */}
            <TextFieldInput
              defaultValue="Enter Username"
              inputHandler={setUserName}
            />

            {/* Password Input */}
            <PasswordFieldInput
              defaultValue="Enter Password"
              showPassword={show}
              setDisplayPassword={setShow}
              inputHandler={setPassword}
            />

            <div className="submit-button">
              <Button
                colorScheme="blue"
                width="20rem"
                marginTop="1rem"
                onClick={() => {
                  submitForm(userName, password);
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Signup;
