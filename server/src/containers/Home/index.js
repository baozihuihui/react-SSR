import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getHomeList } from "./store";

const Home = (props) => {
  useEffect(() => {
    if (!props.home.newsList.length) {
      props.getHomeList();
    }
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
      {props.home.newsList.map((item) => (
        <div key={item.id}>
          <p>时间戳:{item.id}</p>
          <span>{JSON.stringify(item.data)}</span>
        </div>
      ))}
    </>
  );
};

Home.getHomelist = (store) => {
  return store.dispatch(getHomeList());
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
