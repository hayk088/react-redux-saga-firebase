import { combineReducers } from "redux";
import posts from './post/reducer';
export const rootReducers = combineReducers({
  posts,
});