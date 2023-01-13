import express from "express";
const app = express();

import mongoose from "mongoose";
import cors from "cors";

//routes
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import hotelRoute from "./routes/hotel.js";
import bookingRoute from "./routes/booking.js";

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/booking", bookingRoute);
app.use((req, res) => res.status(404).send("Route does not exist"));

const port = 5000;
const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://achank128:anhchang128@nkcproject.wykh3ed.mongodb.net/BOOKING?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}..!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
