import { CHAECK_LOGIN, CHANGE_LOGSTATUS } from "./contants";

const checkLoginAction = (isLogin) => ({
  type: CHAECK_LOGIN,
  isLogin,
});

const changeLogStatus = (loginStatus) => ({
  type: CHANGE_LOGSTATUS,
  loginStatus,
});

export const checkIsLogin = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/isLogin").then((res) => {
      dispatch(checkLoginAction(res.data.data));
    });
  };
};

export const logout = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/logout").then((res) => {
      dispatch(changeLogStatus(!res.data.data));
    });
  };
};

export const login = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/login").then((res) => {
      dispatch(changeLogStatus(res.data.data));
    });
  };
};
