import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const TermsCheckbox: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Box marginTop="1rem">
        <Checkbox
          variant="flushed"
          width={["100%", "100%", "90%", "90%"]}
          defaultIsChecked
        >
          <Text marginLeft="0.5rem">
            I've read and agree with Terms of Service and our Privacy Policy
          </Text>
        </Checkbox>
      </Box>
    </div>
  );
};

export default TermsCheckbox;
