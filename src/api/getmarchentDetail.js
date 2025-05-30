import axios from "./../axios";

// Generate code
const getmarchentsDetail = async (id) => {
  try {
    const res = await axios.get(`api/v1/iron/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default getmarchentsDetail;
