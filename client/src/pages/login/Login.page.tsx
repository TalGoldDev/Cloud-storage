import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import SubmitButton from "../../common/components/SubmitButton/SubmitButton";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";
import { Redirect } from "react-router-dom";
import { loginRequest } from "../../api/login";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, userSelector } from "../../store/slices/user";
import { authSelector, getAuthorization } from "../../store/slices/auth";

const Login: React.FC = () => {
  //const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [redirect, setRedirect] = React.useState<boolean>(false);
  const [redirectRoute, setRedirectRoute] = React.useState<string>("/");

  const dispatch = useDispatch();
  const { email } = useSelector(userSelector);
  const { authorized } = useSelector(authSelector);

  const submitForm = async () => {
    // if validation passed:
    getAuthorization(email, password, false);

    // if authentication completed succesfully.
    if (authorized) {
      redirectToDashboard();
    } else {
      // display error
      console.log("error");
    }
  };

  const redirectToDashboard = () => {
    setRedirect(true);
    setRedirectRoute("/");
  };

  const redirectToRegister = () => {
    setRedirect(true);
    setRedirectRoute("/register");
  };

  return redirect ? (
    <Redirect to={redirectRoute} />
  ) : (
    <div className="login">
      <Flex
        rounded="2xl"
        marginTop="2rem"
        bg="white"
        height="auto"
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

          <LoginForm
            setEmail={(email) => {
              dispatch(setEmail(email));
            }}
            setPassword={setPassword}
          />

          <SubmitButton
            text="Login"
            clickEvent={() => {
              submitForm();
            }}
          />

          <div>
            <Flex
              marginTop="2.5rem"
              direction={["column", "column", "row", "row"]}
            >
              <Text marginRight="1rem" textAlign="center">
                Don't have an account yet?
              </Text>
              <Text
                textColor="red.300"
                onClick={redirectToRegister}
                textAlign="center"
              >
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
