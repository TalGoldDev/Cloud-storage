import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export const loginRequest = async (email: string, password: string) => {
  let result = await axios.post(api_url + "/login", {
    email,
    password,
  });

  console.log(result.data);
  return result;
};
