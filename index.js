const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { UserRouter } = require("./routes/user.route");
const { SoftwareRouter } = require("./routes/Software.route");
const { HardwareRouter } = require("./routes/Hardware.route");
const { ContactRouter } = require("./routes/Contact.route");
const app = express();
require("dotenv").config;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Homepage" });
});

app.use("/user", UserRouter);
app.use("/Software", SoftwareRouter);
app.use("/Hardware", HardwareRouter);
app.use("/Contact", ContactRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected Succesfull to db");
  } catch (err) {
    console.log("error from db");
    console.log(err);
  }
  console.log(`listing on port ${PORT}`);
});
