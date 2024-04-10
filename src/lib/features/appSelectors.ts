import { RootState } from "../store/appStore";

const getEmail = (state: RootState) => state.app.email;
const getIsAuth = (state: RootState) => state.app.isAuthenticated;
const appSelectore = {
  getEmail,
  getIsAuth
};

export default appSelectore;
