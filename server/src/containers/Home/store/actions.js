import axios from "axios";
import { CHANGE_LIST } from "./contants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get("http://localhost:7001/api/getHomeMessage").then((res) => {
      const list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
