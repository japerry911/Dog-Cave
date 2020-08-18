import { combineReducers } from "redux";
import snackbarReducer from "./snackbarReducer";

const allReducers = combineReducers({
  snackbar: snackbarReducer,
});

export default allReducers;
