import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const SubmitButton: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Button
        marginTop="2rem"
        rounded="2xl"
        boxShadow="0 5px 18px rgba(251, 76, 83, .67)"
        bgColor="red.400"
        textColor="white"
        width={["100%", "100%", "100%", "5rem"]}
        height={["4rem", "4rem", "5rem", "5rem"]}
        fontSize="1.5rem"
        fontWeight="semibold"
        textAlign="center"
        _hover={{ bgColor: "red.400" }}
        _focus={{ bgColor: "red.400" }}
        _active={{ bgColor: "red.500" }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default SubmitButton;
