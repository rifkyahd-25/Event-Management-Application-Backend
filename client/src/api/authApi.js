import axiosClient from "./axiosClient";

export const signup = async (data) => {
  return await axiosClient.post("/auth/signup", data);
};

export const userlogin = async (data) => {
  return await axiosClient.post("/auth/signin", data, {});
};

export const logoutUser = async (data) => {
  return await axiosClient.post("/auth/signout");
};

export const getProfile = async () => {
  return await axiosClient.get("/auth/profile");
};
