import axios from "axios";

const url = "http://127.0.0.1:3003/victimForm";
const url2 = "http://127.0.0.1:3003/foodMedForm";

export const getData = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const getRelief = async (id) => {
  id = id || "";
  return await axios.get(`${url2}/${id}`);
};

export const add = async (user) => {
  return await axios.post(url, user);
};
export const addRelief = async (user) => {
  return await axios.post(url2, user);
};

export const editSong = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteSong = async (id) => {
  console.log("deleteSong", id);
  return await axios.delete(`${url}/${id}`);
};
