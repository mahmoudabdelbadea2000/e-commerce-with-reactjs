import axios from "axios";

export const useDeleteData = async (url, params) => {
  const res = await axios.delete(url, params);
  return res.data;
};
