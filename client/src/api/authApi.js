import axiosClient from "./axiosClient";

export const signup = async (data) => {
    return await axiosClient.post("/auth/signup", data);
}


export const login = async (data) => {
    return await axiosClient.post("/auth/signin", data);
}