import axios from "axios";

const axiosPublic = axios.create({
  //http://localhost:5000
  baseURL: "https://vatiza-portfolio.vercel.app",
});
const getAxios = () => {
  return axiosPublic;
};

export default getAxios;
