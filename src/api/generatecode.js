import axios from "./../axios";
import { toast } from "sonner";

// Generate code
const generateCode = async (data) => {
  const toastId = toast.loading("Code generating...");
  try {
    const res = await axios.post("api/v1/iron", data);
    toast.success("Code generated successfully", {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    return res.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
  }
};

export default generateCode;
