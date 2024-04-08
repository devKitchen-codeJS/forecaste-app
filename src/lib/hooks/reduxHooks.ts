import { UseDispatch, useDispatch, useSelector, useStore } from "react-redux";
// import { RootState, AppDispatch, AppStore } from "../store/appStore";
import { RootState, AppDispatch, AppStore } from "../store/appStore";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useSelector.withTypes<AppStore>()


