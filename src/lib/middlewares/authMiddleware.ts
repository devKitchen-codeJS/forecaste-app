import firebase from "firebase/compat/app";
import { auth } from "../firebase/firebase";
import { removeUser, setUser } from "../features/appSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

export const signInWithGoogle = () => async () => {
  const dispatch = useAppDispatch();
  console.log('some')
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    dispatch(setUser(result.user));
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export const signOut = () => async () => {
  const dispatch = useAppDispatch();
  try {
    await firebase.auth().signOut();
    dispatch(removeUser());
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
