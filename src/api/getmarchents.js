import axios from "./../axios";

// Generate code
const getmarchents = async () => {
  try {
    const res = await axios.get("api/v1/iron");
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getmarchents;
