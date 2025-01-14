import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = UseAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("Erro from axios interceptor ->", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();

          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default UseAxiosSecure;
