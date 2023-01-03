import express from "express";
import {
  createBooking,
  getAllBooking,
  getUserBooking,
} from "../controllers/bookingController.js";

const router = express.Router();
router.post("/", createBooking);
router.get("/", getAllBooking);
router.get("/user/:userId", getUserBooking);

export default router;
