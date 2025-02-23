import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../api/eventApi";
import BookingForm from "../components/BookingForm";
import Loader from "../components/Loader";

export const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [remainingDays, setRemainingDays] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const { data } = await getEventById(eventId);
        setEvent(data);

        //calculate remaining day
        const eventDate = new Date(data.date);
        const currentDate = new Date();
        const timeDifference = eventDate - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        setRemainingDays(daysLeft);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (loading) return <Loader />;
  return (
    <div className="block max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {event.title}
      </h1>
      <p className=" mb-2 font-normal text-gray-700 dark:text-gray-300">
        {event.description}
      </p>
      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
        Date: {new Date(event.date).toLocaleDateString()}
      </p>
      {remainingDays !== null && (
        <>
          <BookingForm eventId={event._id} />
          <p className="text-red-500 font-semibold">
            {remainingDays > 0
              ? `Only ${remainingDays} days left until the event!`
              : "The event has started or passed."}
          </p>
        </>
      )}
    </div>
  );
};
