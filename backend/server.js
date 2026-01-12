require("dotenv").config();

console.log("js is running");

const express = require("express");
const mongoose = require("mongoose");

const routeeee = require("./routes/workouts");

// express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//test routes

app.get("/", (req, res) => {
  res.send({ mssg: "backend is working not fine! " });
  console.log("hellop");
});

//     ROUTES
app.use("/api/workouts", routeeee);

// connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error.message);
  });
