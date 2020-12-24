import axios from "axios";
export const serverAxios = (req) =>
  axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      cookie: req.get("cookie") || "", // 从请求中拿到cookie
    },
  });

export const clientAxios = axios.create({
  baseURL: "/",
});
