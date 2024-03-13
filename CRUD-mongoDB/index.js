const express = require("express");

const app = express();

//routes

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(3000, () => {
  console.log("running...");
});
