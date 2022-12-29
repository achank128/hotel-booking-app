import express from "express";
import {
  createBooking,
  getAllBooking,
  getUserBooking,
} from "../controllers/bookingController.js";

const router = express.Router();
router.post("/", createBooking);
router.get("/all", getAllBooking);
router.get("/:userId", getUserBooking);

export default router;
