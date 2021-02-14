import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export const registerUser = async (
  name: string,
  password: string,
  email: string,
  memberlevel: number = 1
) => {
  console.log("register");
  let result = await axios.post(api_url + "/register", {
    name,
    password,
    email,
    memberlevel,
  });

  console.log(result.data);
  return result.data;
};
