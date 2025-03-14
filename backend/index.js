import dotenv from "dotenv";
import express from "express";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();

// Connect to DB
connectDB();

// MiddleWare
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
// Visitor Routes
app.use("/api/users", userRoutes);

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
