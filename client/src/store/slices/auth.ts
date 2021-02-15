import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../api/login";
import { registerUser } from "../../api/register";

export const initialState = {
  loading: false,
  hasErrors: false,
  authorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuth: (state) => {
      state.loading = true;
    },
    getAuthSuccess: (state) => {
      state.loading = false;
      state.hasErrors = false;
      state.authorized = true;
      console.log("state:auth", state.authorized);
    },
    getAuthFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getAuth, getAuthSuccess, getAuthFailure } = authSlice.actions;

export const authSelector = (state: { auth: any }) => state.auth;

export default authSlice.reducer;

// Asynchronous thunk action
export function getAuthorization(
  email: string,
  password: string,
  register: boolean
) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(getAuth());

    try {
      if (register) {
        //const response = await registerUser(email, password);
        //const data = await response.json();
      } else {
        const response = await loginRequest(email, password);
        const data = await response.json();
      }

      dispatch(getAuthSuccess());
    } catch (error) {
      dispatch(getAuthFailure());
    }
  };
}
