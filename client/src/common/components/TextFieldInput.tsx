import React from "react";
import { Input } from "@chakra-ui/react";
import { InputField } from "../interfaces/InputField";

const TextFieldInput: React.FC<InputField> = (props: InputField) => {
  return (
    <div>
      <Input
        pr="4.5rem"
        type={"text"}
        placeholder={props.defaultValue}
        onChange={(event): void => props.inputHandler(event.target.value)}
      />
    </div>
  );
};

export default TextFieldInput;
