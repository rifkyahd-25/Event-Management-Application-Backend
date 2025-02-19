import express from "express";
import mangoose from "mongoose";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js"
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});


app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
