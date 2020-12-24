import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./index.css";
import { logout, login } from "./store";
import withStyles from "../../hoc/withStyles";

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
    <div className={styles.test}>
      <Link to="/">首页</Link>
      {props.head.isLogin ? (
        <>
          <button onClick={logoutBtn}>退出</button>
          <Link to="/translation">获取数据</Link>
        </>
      ) : (
        <button onClick={loginBtn}>登陆</button>
      )}
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Header, styles));
