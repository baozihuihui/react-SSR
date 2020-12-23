import { CHANGE_LIST } from "./contants";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getTranslationList = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/getTranslation").then((res) => {
      const list = res.data.data;
      dispatch(changeList(list));
    });
  };
};
