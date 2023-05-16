import axios from "axios";
import config from "./config.json";

export const httpService = (url: string, method: string, params = null) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken"));

  return axios({
    url: config.onlineApi + url,
    method,
    params,
    headers: {
      Authorization: tokenInfo ? `Bearer ${tokenInfo.token}` : null,
      "Content-Type": "application/json",
    },
  });
};
