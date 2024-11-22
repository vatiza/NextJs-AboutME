import axios from "axios";

const axiosPublic = axios.create({
  //http://localhost:5000
  baseURL: "http://localhost:5000/",
});
const getAxios = () => {
  return axiosPublic;
};

export default getAxios;
