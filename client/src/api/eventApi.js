import axiosClient from "./axiosClient";

export const getEvents = async () => {
    return await axiosClient.get("/event/getevents");
};

export const getEventById = async (id) => {
    return await axiosClient.get(`/event/getevent/${id}`);
}