// server/index.js
require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose");
const mongoConnectionURL = process.env.MONGO_SRV;
const databaseName = "restaurants";

mongoose.set("strictQuery", false);
// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});