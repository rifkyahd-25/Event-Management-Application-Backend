import axiosClient from "./axiosClient";

export const getEvents = async () => {
  return await axiosClient.get("/event/getevents");
};

export const getEventById = async (id) => {
  return await axiosClient.get(`/event/getevent/${id}`);
};

export const createEvent = async (eventData) => {
  return await axiosClient.post("/event/create", eventData);
};

export const updateEvent = async (id, eventData) => {
  return await axiosClient.put(`/event/update/${id}`, eventData);
};

export const deleteEvent = async (id) => {
  return await axiosClient.delete(`/event/delete/${id}`);
};
