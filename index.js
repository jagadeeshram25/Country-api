const express = require("express");
const app = express();

const connectdb = require("./config/db");

// Routes
const authroute = require("./router/authRouter");
const countryRoute = require("./router/countryRouter");

// Middleware
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Database Connection
connectdb();

// Routes
app.use("/auth", authroute);
app.use("/country", countryRoute);

// Home Route
app.get("/", (req, res) => {
    res.send("Country Information Management System API Running...");
});

app.listen(3006, () => {
    console.log("Server started on port 3006");
});