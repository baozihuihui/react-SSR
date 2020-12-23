import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store";

const Home = (props) => {
  useEffect(() => {
    // ! 这样是不对的 切换页面时，无法即使获取最新列表
    if (!props.home.newsList.length) {
      props.getHomeList();
    }
  }, []);

  return (
    <>
      <h1>Home Component</h1>
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

Home.loadData = (store) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
