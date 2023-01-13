import User from "../models/User.js";

export const getAllUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) res.status(404).json({ msg: "No user with id: " + req.params.id });
  res.status(200).json(user);
};
