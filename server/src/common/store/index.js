import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { serverAxios, clientAxios } from "../axios";
import { reducer as HomeReducer } from "../../containers/Home/store";
import { reducer as Translation } from "../../containers/Translation/store";
import { reducer as HeadReducer } from "../../common/components/Header/store";

const reducer = combineReducers({
  home: HomeReducer,
  head: HeadReducer,
  translation: Translation,
});

export const getStore = (req) => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
  );
};

// 客户端 脱水
export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
