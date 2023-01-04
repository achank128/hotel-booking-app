import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: String,
    ratings: Number,
    room: Number,
    visits: String,
    tags: String,
    description: String,
    imageUrl: String,
    completedBookings: String,
    draftBookings: String,
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;
