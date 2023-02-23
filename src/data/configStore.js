import { createStore, combineReducers } from "redux";
import { resumeReducer } from "./resume/reducer";

const AppReducer = combineReducers({ resumeReducer });

const store = createStore(AppReducer);

export default store;
