import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "./appTypes";
import { signInWithGoogle } from "../middlewares/authMiddleware";
import { cookies } from "next/headers";

const initialState: IAuth = {
  email: "",
  token: "",
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    // signIn: (state) => {},
    // signUp: (state, action: PayloadAction<any>) => {
    //   state.firstName = action.payload.firstName;
    //   state.email = action.payload.email;
    //   state.password = action.payload.password;
    // },
    setUser: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
