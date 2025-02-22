import axiosClient from "./axiosClient";

export const signup = async (data) => {
    return await axiosClient.post("/auth/signup", data);
    
}


export const userlogin = async (data) => {
    return await axiosClient.post("/auth/signin", data);
}