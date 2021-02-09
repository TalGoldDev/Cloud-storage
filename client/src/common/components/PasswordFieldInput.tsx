import React from "react";
import { InputField } from "../interfaces/InputField";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

interface passwordInputField extends InputField {
  showPassword: boolean;
  setDisplayPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordFieldInput: React.FC<passwordInputField> = (
  props: passwordInputField
) => {
  return (
    <div>
      <InputGroup size="md" marginTop="1rem">
        <Input
          pr="4.5rem"
          type={props.showPassword ? "text" : "password"}
          placeholder={props.defaultValue}
          onChange={(event): void => props.inputHandler(event.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={(): void => {
              props.setDisplayPassword(!props.showPassword);
            }}
          >
            {props.showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default PasswordFieldInput;
