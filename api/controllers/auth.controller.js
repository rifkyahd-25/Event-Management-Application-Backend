import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcryptjs';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const newuser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newuser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};

// export const test = (req, res) => {
//     res.json({ message: 'API is working!' });
//   };
