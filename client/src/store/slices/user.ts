import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "Default",
  email: "Defualt",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      console.log(state.email);
    },
  },
});

export const { setName, setEmail } = userSlice.actions;

export const userSelector = (state: { user: any }) => state.user;

export default userSlice.reducer;
