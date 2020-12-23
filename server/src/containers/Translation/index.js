import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getTranslationList } from "./store";

const Translation = (props) => {
  useEffect(() => {
    // ! 这样是不对的 切换页面时，无法即使获取最新列表
    if (!props.translation.newsList.length) {
      props.getTranslationList();
    }
  }, []);

  return (
    <>
      <h1>Translation Component</h1>
      {props.isLogin ? (
        <>
          {props.translation.newsList.map((item) => (
            <div key={item.id}>
              <p>时间戳:{item.id}</p>
              <span>{JSON.stringify(item.data)}</span>
            </div>
          ))}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

const mapStateToProps = (state) => ({
  translation: state.translation,
  isLogin: state.head.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  getTranslationList() {
    dispatch(getTranslationList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
