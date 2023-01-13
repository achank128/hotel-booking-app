import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

router.route("/").post(createHotel).get(getAllHotel);
router.route("/:id").get(getHotel).delete(deleteHotel).put(updateHotel);

export default router;
