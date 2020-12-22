import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getHomeList } from "./store";

const Home = (props) => {
  useEffect(() => {
    props.getHomeList();
  }, []);

  return (
    <>
      <Header />
      <p>hello {props.home.name}!</p>
      <button
        onClick={() => {
          alert("alert Home Button");
        }}
      >
        click
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);
