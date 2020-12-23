import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login } from "./store";

const Header = (props) => {
  const logoutBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.logout();
  };

  const loginBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.login();
  };

  return (
    <>
      <Link to="/">首页</Link>
      <br />
      <Link to="/home">新闻</Link>
      <br />
      {props.head.isLogin ? (
        <>
          <button href="" onClick={logoutBtn}>
            退出
          </button>
          <br />
          <Link to="/translation">获取数据</Link>
        </>
      ) : (
        <button onClick={loginBtn}>登陆</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  head: state.head,
});

const mapDispatchToProps = (dispatch) => ({
  login() {
    dispatch(login());
  },
  logout() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
