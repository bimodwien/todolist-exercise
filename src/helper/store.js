import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/login";

const reducer = combineReducers({
  auth: loginSlice,
});

export const store = configureStore({
  reducer,
});
