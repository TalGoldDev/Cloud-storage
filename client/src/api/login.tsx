import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export const loginRequest = async (email: string, password: string) => {
  let result = await axios.post(api_url + "/login", {
    email,
    password,
  });

  if (result.data == "User not found") {
    console.log(result.data);
    return false;
  }

  return result.data;
};
