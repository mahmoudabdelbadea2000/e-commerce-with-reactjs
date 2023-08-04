import axios from "axios";

export const useDeleteData = async (url, parmas) => {
  const res = await axios.delete(url, parmas);
  return res.data;
};