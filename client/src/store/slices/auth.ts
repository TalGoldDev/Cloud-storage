import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
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
    },
    getAuthFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default authSlice.reducer;
