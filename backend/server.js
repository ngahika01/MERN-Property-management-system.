import express from "express";
import dotenv from "dotenv";
import config from "config";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import roomsRoutes from "./routes/roomsRoute.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import landlordRoutes from "./routes/landlordRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleWare.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello myke");
});

app.use("/api/users", userRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/landlords", landlordRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} on ${process.env.NODE_ENV} mode`.yellow.bold
  );
});
