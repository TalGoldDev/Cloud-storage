import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import PasswordFieldInput from "../../../common/components/PasswordFieldInput";
import TextFieldInput from "../../../common/components/TextFieldInput";

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const RegistrationForm: React.FC<Props> = (props: Props) => {
  return (
    <div className="Registration form">
      <Flex marginBottom="1rem">
        <Box marginRight="1rem" width="50%">
          <TextFieldInput
            defaultValue="Name"
            inputHandler={props.setUserName}
          />
        </Box>
        <Box width="50%">
          <TextFieldInput
            defaultValue="Email"
            inputHandler={props.setUserName}
          />
        </Box>
      </Flex>
      <PasswordFieldInput
        defaultValue="Password"
        inputHandler={props.setPassword}
      />
    </div>
  );
};

export default RegistrationForm;
