import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://vatiza-portfolio.vercel.app",
});
const getAxios = () => {
  return axiosPublic;
};

export default getAxios;
