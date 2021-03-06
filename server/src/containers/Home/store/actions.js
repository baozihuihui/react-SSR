import { CHANGE_LIST } from "./contants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/getHomeMessage").then((res) => {
      const list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
