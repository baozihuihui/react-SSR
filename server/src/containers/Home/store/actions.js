import axios from "axios";
export const getHomeList = () => {
  return () => {
    axios.get("http://localhost:7001/api/getHomeMessage").then((res) => {
      console.log(res);
    });
  };
};
