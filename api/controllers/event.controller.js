import Event from "../models/event.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
//   if (!req.user.isAdmin) {
//     return next(errorHandler(403, "You are not allowed to create an event"));
//   }
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.date ||
    !req.body.location
  ) {
    return next(errorHandler(400, "All fields are required!"));
  }

  const { title, description, date, location } = req.body;
  const event = new Event({
    title,
    description,
    date,
    location,
  });

  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try{
    const events = await Event.find().populate("title", "description");
    res.json(events);
  }catch(error){
    next(error);
  }
};

