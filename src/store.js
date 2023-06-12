import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import userSliceReducer from "./redux-toolkit/userSlice";
import policiesSliceReducer from "./redux-toolkit/policiesSlice";

const rootReducer = combineReducers({
  allPolicies: policiesSliceReducer,
  allDetails: userSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// export const combineReducers({
//   todos,
//   counter
// })