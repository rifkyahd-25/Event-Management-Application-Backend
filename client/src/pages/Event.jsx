import React, { useEffect, useState, useRef } from "react";
import { getEvents } from "../api/eventApi";
import { EventCard } from "../components/EventCard";
import Loader from "../components/Loader";
import gsap from "gsap";

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const { data } = await getEvents();

        // Ensure `data` is a valid array
        if (!Array.isArray(data) || data.length === 0) {
          setLoading(false);
          return;
        }

        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Animates each card with a slight delay
      });
    }
  }, [events]);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold m-5 dark:text-white">All Events</h1>
      <div className="grid grid-cols-3 gap-5">
        {events.map((event, index) => (
          <div
            key={event._id}
            ref={(el) => (cardsRef.current[index] = el)} // Store refs dynamically
            className="opacity-0 transform translate-y-5" // Set initial opacity and position for GSAP
          >
            <EventCard events={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
