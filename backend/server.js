const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();
const Port = process.env.PORT || 4000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello engineer");
// });

app.listen(Port, () => {
  console.log(`Server running on port http://localhost:${Port}`);
});
