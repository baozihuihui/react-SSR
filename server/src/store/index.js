import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as HomeReducer } from "../containers/Home/store";

const reducer = combineReducers({ home: HomeReducer });

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

// 客户端 脱水
export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
