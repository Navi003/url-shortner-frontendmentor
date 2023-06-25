import axios from "axios";

import useStore from "./useStore";

const sendRequest = (options = {}) => {
  //   const { token } = useStore.getState();

  let defaultConfig = {
    url: "/",
    method: "get",
    timeout: 10000,
    data: {},
    headers: {
      Authorization: `Bearer ${"no Token" || ""}`,
    },
    validateStatus: (status: number) => status >= 200 && status < 500,
  };

  // mix defaultConfig with options
  const requestConfig = {
    ...defaultConfig,
    ...options,
  };

  return axios(requestConfig);
};

export default sendRequest;
