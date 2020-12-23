import { CHAECK_LOGIN, CHANGE_LOGSTATUS } from "./contants";

const defaultState = {
  isLogin: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAECK_LOGIN:
      return { ...state, isLogin: action.isLogin };
    case CHANGE_LOGSTATUS:
      return { ...state, isLogin: action.loginStatus };
    default:
      return state;
  }
};
