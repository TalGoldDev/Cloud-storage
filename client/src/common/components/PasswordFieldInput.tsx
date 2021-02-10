import React from "react";
import { InputField } from "../interfaces/InputField";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const PasswordFieldInput: React.FC<InputField> = (props: InputField) => {
  return (
    <div>
      <FormControl marginTop="1rem">
        <FormLabel>{props.defaultValue}</FormLabel>
        <Input
          border="2px"
          borderColor="gray.100"
          _focus={{ bgColor: "gray.100" }}
          height="3rem"
          variant="filled"
          pr="4.5rem"
          type={"password"}
          onChange={(event): void => props.inputHandler(event.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default PasswordFieldInput;
