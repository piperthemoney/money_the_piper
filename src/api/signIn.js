import axios, { setAuthToken } from "../axios";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const handleLogin = async (data) => {
  // const toastId = toast.loading("Logging in...");
  try {
    const response = await axios.post("api/v1/users/login", data);
    console.log("response", response);
    // toast.success("Logged in successfully!", {
    //   id: toastId,
    //   autoClose: 500, // Auto-close the toast after 5 seconds
    // });
    const changanToken = response.data.data.token;
    setAuthToken(changanToken);
    localStorage.setItem("piper-token", changanToken);
    let decodedToken = jwtDecode(changanToken);
    localStorage.setItem("piper-token", decodedToken.iat * 1000);

    return response.data;
  } catch (error) {
    console.log(error);
    // toast.error(`${error.response.data.message}`, {
    //   id: toastId,
    //   autoClose: 500, // Auto-close the toast after 5 seconds
    // });
  }
};

export default handleLogin;
