import Event from "../models/event.model.js";
import { errorHandler } from "../utils/error.js";
import Booking from "../models/booking.model.js";


export const creatBooking = async (req, res, next) => {
    try {
        const { event } = req.body;
        const eventData = await Event.findById(event);
        if (!eventData) {
            return next(errorHandler(404, "Event not found"));
        }

        const booking = new Booking({
            event: event,
            user: req.user.id,
        });

        await booking.save();
        res.status(201).json({ message: 'Booking request sent', booking });
    } catch (error) {
        next(error);
    }

}