import axios from "axios";

export const useGetData = async (url, parmas) => {
  const res = await axios.get(url, parmas);
  return res.data;
};