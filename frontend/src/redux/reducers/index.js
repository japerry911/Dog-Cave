import { combineReducers } from "redux";
import snackbarReducer from "./snackbarReducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({
  snackbar: snackbarReducer,
  auth: authReducer,
});

export default allReducers;
