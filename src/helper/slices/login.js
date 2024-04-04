import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.username = action.payload.username;
      state.password = action.payload.password;
      localStorage.setItem("item", action.payload.username);
      return state;
    },
    logout: (state) => {
      localStorage.removeItem("item");
      state = initialState;
      return state;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
