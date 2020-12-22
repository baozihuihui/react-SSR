import React from "react";

const Home = () => {
  return (
    <div
      onClick={() => {
        alert("alert Home Div");
      }}
    >
      hello world!
    </div>
  );
};

export default Home;
