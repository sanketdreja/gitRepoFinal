import axios from "axios";

const BASE_URL = "";
export const getFramersList = () => {
  return axios.get(BASE_URL + "/");
};

export const getFramerById = (farmerId) => {
  return axios.get(BASE_URL + "/" + farmerId);
};
