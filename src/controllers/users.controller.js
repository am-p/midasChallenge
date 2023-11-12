import { Users } from "../models/User.js";
import { secret } from "../config/default.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!password || !email || !name) {
    return res.status(400).json({ message: "Provide full data" });
  }
  const passwordHashed = await bcrypt.hash(password, 8);

  try {
    const newUser = await Users.create({
      name,
      email,
      password: passwordHashed,
    });

    return res.json({ message: "Thanks for register" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userWithEmail = await Users.findOne({ where: { email } });
    const passCompared = await bcrypt.compare(password, userWithEmail.password);

    if (!passCompared) {
      return res.status(400).json({ message: "Password don't match" });
    }
    const payload = { email: userWithEmail.email };
    const jwtToken = jwt.sign(payload, secret.jwtSecret, {
      expiresIn: "2h",
    });
    res.json({
      name: userWithEmail.name,
      jwtToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
