import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json({ msg: "Booking has been created!", booking });
};

export const getUserBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllBooking = async (req, res) => {
  const booking = await Booking.find();
  res.status(200).json(booking);
};

export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      res.status(404).json({ msg: "No Booking with id: " + req.params.id });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
};
