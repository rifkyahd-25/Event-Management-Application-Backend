import { useState } from "react";
import { createBooking } from "../api/bookingApi";
import Loader from "./Loader";

const BookingForm = ({ eventId }) => {
  const [loading, setLoading] = useState(false);
  const [publishError, setPublishError] = useState(null);

  const handleBooking = async () => {
    setLoading(true);
    try {
      await createBooking(eventId);
      setPublishError(null);
    } catch (error) {
      if (error.status === 400 && error.message) {
        setPublishError("You have already booked this event!"); // ✅ Corrected line
      } else {
        setPublishError("Something went wrong. Please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={handleBooking}
        disabled={loading}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {loading ? <Loader /> : "Book Now"}
      </button>

      {publishError && (
        <h1 className="text-red-500 border border-red-500 p-2 rounded mt-3 mb-3">
          {publishError}
        </h1>
      )}
    </>
  );
};

export default BookingForm;
