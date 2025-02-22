import axiosClient from "./axiosClient";

export const getEvents = async () => {
    return await axiosClient.get("/event/getevents");
};