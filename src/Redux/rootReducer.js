import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import { formReducer } from "./Form/formReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer
})