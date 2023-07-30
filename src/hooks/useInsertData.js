import axios from "axios";

export const useInsertDataWithImage = async (url, parmas) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post(url, parmas, config);
  return res.data;
};

export const useInsertData = async (url, parmas) => {
  const res = await axios.post(url, parmas);
  return res.data;
};
