import axiosClient from "./axiosClient";

// Get all bookings (Admin only)
export const getAllBookings = async () => {
  return await axiosClient.get("/bookings/all");
};

// Get User's Bookings
export const getUserBookings = async () => {
  return await axiosClient.get("/bookings/getevuser");
};

// Create a new booking
export const createBooking = async (eventId) => {
  return await axiosClient.post(`/bookings/create/`, { event: eventId });
};

// Cancel a booking
export const cancelBooking = async (bookingId) => {
  return await axiosClient.delete(`/bookings/${bookingId}/cancel`);
};
