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

export const getUserBookings = async (req, res, next) => {
    try{
        const bookings = await Booking.find({ user: req.user.id }).populate('event');
        res.status(200).json({ bookings });
    } catch (error) {
        next(error);
    }
};

export const cancelBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findOne({ _id: req.params.id, user: req.user.id});
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        booking.status = 'cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled successfully' });
    } catch (error) {
       next(error);
    }

}


export const getAllbooking = async (req, res, next) => {
    if(!req.user.isAdmin) {
        return next(errorHandler(403, "You are not allowed to cancel this booking"));
    }

    try {
        const booking = await Booking.find().populate('event user');
        res.json(booking);
    } catch (error) {
        next(error);
    }
}