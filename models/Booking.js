import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    hotelId: {
      type: String,
      require: true,
    },
    checkIn: Date,
    checkOut: Date,
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
