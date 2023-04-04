import { useSelector } from "react-redux";
import axios from "axios";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosPublic = axios.create({
    baseURL: "http://12233.fullstack.clarusway.com/",
  });
  
  const axiosWithToken = axios.create({
    baseURL: "http://12233.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
