import { CHANGE_LIST } from "./contants";

const defaultState = {
  newsList: [],
};

export const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case CHANGE_LIST:
      return { ...state, newsList: actions.list };
    default:
      return state;
  }
};
