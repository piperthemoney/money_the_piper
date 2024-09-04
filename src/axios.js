import axios from "axios";
const BASE_URL = "/api";

// Create an Axios instance
axios.defaults.baseURL = BASE_URL;
const token = localStorage.getItem("piper-token");
const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.withCredentials = true;

export { setAuthToken };
export default axios;
