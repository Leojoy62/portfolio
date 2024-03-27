const express = require("express");
const connectDB = require("./Config/db");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});
