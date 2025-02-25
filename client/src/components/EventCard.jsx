import { Link } from "react-router-dom";

export const EventCard = ({ events, isBooked, onCancelBooking, onDelete }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800  dark:border-gray-700">
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {events.title}
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {events.description}
      </p>
      <p className="text-gray-500">
        Date: {new Date(events.date).toLocaleDateString()}
      </p>
      <Link
        to={`/events/${events._id}`}
        className=" mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Details
      </Link>
      {isBooked && (
        <button
          onClick={onCancelBooking}
          className="mt-3 ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
        >
          Cancel Booking
        </button>
      )}

      {onDelete && (
        <button
          onClick={() => onDelete(events._id)}
          className="mt-3 ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
        >
          Delete Event
        </button>
      )}
    </div>
  );
};
