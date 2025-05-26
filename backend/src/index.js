import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
dotenv.config();

const app = express();
app.use(
    cors({
      origin: "http://localhost:5174",
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Guys welcome to leetlab🔥");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server running on port 8080');
});