import React, { useEffect } from "react";
import { connect } from "react-redux";
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
      {props.translation.newsList.map((item) => (
        <div key={item.id}>
          <p>时间戳:{item.id}</p>
          <span>{JSON.stringify(item.data)}</span>
        </div>
      ))}
    </>
  );
};

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

const mapStateToProps = (state) => ({
  translation: state.translation,
});

const mapDispatchToProps = (dispatch) => ({
  getTranslationList() {
    dispatch(getTranslationList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
