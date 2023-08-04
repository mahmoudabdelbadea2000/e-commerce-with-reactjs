import axios from "axios";

export const useUpdateDataWithImage = async (url, parmas) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.put(url, parmas, config);
  return res.data;
};

export const useUpdateData = async (url, parmas) => {
  const res = await axios.put(url, parmas);
  return res.data;
};
