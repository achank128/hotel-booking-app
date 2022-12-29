import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  const hotel = await Hotel.create(req.body);
  res.status(201).json({ msg: "hotel has been created!", hotel });
};

export const updateHotel = async (req, res) => {
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body);
  if (!hotel)
    res.status(404).json({ msg: "No hotel with id: " + req.params.id });
  res.status(200).json({ msg: "hotel has been updated!", hotel });
};

export const deleteHotel = async (req, res) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);
  if (!hotel)
    res.status(404).json({ msg: "No hotel with id: " + req.params.id });
  res.status(200).json({ msg: "hotel has been deleted!" });
};

export const getAllHotel = async (req, res) => {
  const hotel = await Hotel.find();
  res.status(200).json(hotel);
};

export const getHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel)
    res.status(404).json({ msg: "No hotel with id: " + req.params.id });
  res.status(200).json(hotel);
};
