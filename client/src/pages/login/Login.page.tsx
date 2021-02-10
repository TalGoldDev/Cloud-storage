import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import SubmitButton from "../../common/components/SubmitButton/SubmitButton";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

const Login: React.FC = () => {
  const [userName, setUserName] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  return (
    <div className="login">
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
            <Heading size="3xl">Log in</Heading>
          </div>

          <SocialLogin />

          <LoginForm setUserName={setUserName} setPassword={setPassword} />

          <SubmitButton text="Login" />

          <div>
            <Flex
              marginTop="2.5rem"
              direction={["column", "column", "row", "row"]}
            >
              <Text marginRight="1rem" textAlign="center">
                Don't have an account yet?
              </Text>
              <Text textColor="red.300" textAlign="center">
                Sign up
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

export default Login;
