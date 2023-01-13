import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json({ msg: "Booking has been created!", booking });
};

export const updateBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
  if (!booking)
    res.status(404).json({ msg: "No Booking with id: " + req.params.id });
  res.status(200).json({ msg: "Booking has been updated!", booking });
};

export const getUserBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });

    let newBookings = [];
    for (let i = 0; i < bookings.length; i++) {
      const hotel = await Hotel.findById(bookings[i].hotelId);
      newBookings.push({ ...bookings[i]._doc, hotel });
    }

    res.status(200).json(newBookings);
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
