const express = require("express");
const app = express();
require("dotenv").config();

const stundentsRoutes = require("./students/routes");

const port = process.env.PORT;

app.use(express.json());
app.use("/api/students", stundentsRoutes);

app.listen(port, async () => {
  try {
    console.log(`SERVER IS RUNNING ON THE PORT ${port}`);
  } catch (error) {
    console.log(e);
  }
});
