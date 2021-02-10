import React from "react";
import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { InputField } from "../interfaces/InputField";

const TextFieldInput: React.FC<InputField> = (props: InputField) => {
  return (
    <div>
      <FormControl>
        <FormLabel>{props.defaultValue}</FormLabel>
        <Input
          border="2px"
          borderColor="gray.100"
          height="3rem"
          variant="filled"
          pr="4.5rem"
          type={"text"}
          _focus={{ bgColor: "gray.100" }}
          onChange={(event): void => props.inputHandler(event.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default TextFieldInput;
