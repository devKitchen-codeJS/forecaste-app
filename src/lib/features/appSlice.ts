import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "./appTypes";


const initialState: IAuth = {
  firstName: "",
  email: "",
  password: "",
  user: null,
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    signIn: (state) => {},
    signUp: (state, action: PayloadAction<any>) => {
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthenticated = action.payload.auth;
    //   localStorage.setItem('auth', state.isAuthenticated)
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, signUp, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
