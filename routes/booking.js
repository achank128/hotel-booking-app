import express from "express";
import {
  createBooking,
  getAllBooking,
  getUserBooking,
  updateBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.put("/:id", updateBooking);
router.get("/", getAllBooking);
router.get("/user/:userId", getUserBooking);

export default router;
