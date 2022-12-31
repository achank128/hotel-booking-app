import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const usernameExists = await User.findOne({ username: req.body.username });
    if (usernameExists) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const user = await User.create(req.body);
    res.status(201).json({ msg: "Register successful", user });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
      res.status(400).json({ msg: "Username or Password incorrect" });
    }

    res.status(200).json({ msg: "Login successful", user });
  } catch (error) {
    return res.status(400).json(error);
  }
};
