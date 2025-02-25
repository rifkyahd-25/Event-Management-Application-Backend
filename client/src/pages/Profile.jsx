import { useEffect, useRef, useState } from "react";
import { getProfile } from "../api/authApi";
import { getUserBookings } from "../api/bookingApi";
import Loader from "../components/Loader";
import { EventCard } from "../components/EventCard";
import gsap from "gsap";

export const Profile = () => {
  
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        const { data } = await getProfile();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setUser(null);
      }
    };

    const fetchBookings = async () => {
      try {
        const { data } = await getUserBookings();

        setBookings(data.bookings || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]);
      }
    };

    fetchProfile();
    fetchBookings();
  }, []);



  if (!user) return <Loader />;
  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        {/* Profile Header */}
        <h1 className="  text-3xl font-semibold text-gray-800 dark:text-white">
          Profile
        </h1>
        <div className="mt-4 flex flex-col  items-center mb-4  " >
          <p className="text-xl text-gray-700 dark:text-gray-300">
          
             <span className="font-bold text-gray-900 dark:text-white">
              {user.username}
            </span>
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300">
         
             <span className="font-bold text-gray-900 dark:text-white">
              {user.email}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold m-5 dark:text-white">
            My Bookings
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {bookings.map((booking, index) => (
              <div
                key={booking._id}
               
              >
                <EventCard events={booking.event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

    //  <div className="flex flex-col items-center">
    //       <h1 className="text-3xl font-bold m-5 dark:text-white">All Events</h1>
    //       <div className="grid grid-cols-3 gap-5">
    //         {events.map((event, index) => (
    //           <div
    //             key={event._id}
    //             ref={(el) => (cardsRef.current[index] = el)} // Store refs dynamically
    //             className="opacity-0 transform translate-y-5" // Set initial opacity and position for GSAP
    //           >
    //             <EventCard events={event} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
  );
};
