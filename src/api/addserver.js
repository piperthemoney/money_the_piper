import axios from "./../axios";
import { toast } from "sonner";

const addserver = async (data) => {
  console.log(data);
  const toastId = toast.loading("Adding Server...");
  try {
    const res = await axios.post(`api/v1/server-manager/${data.id}`, {
      vlessServers: data.vlessServer,
    });
    toast.success("Add Server successfully", {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    console.log(error);
  }
};

export default addserver;
