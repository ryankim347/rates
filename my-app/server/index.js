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

// Create restaurants schema
const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    date: String,
    cuisine: String,
    rating: Number,
    price: String,
    comments: String,
    author: String
  });

  const RestaurantModel = mongoose.model('RestaurantModel', restaurantSchema);

  // Create a restaurant
  const myDocument = new RestaurantModel({
    name: "kungfutea",
    location: "nova",
    date: "012724",
    cuisine: "taiwan",
    rating: 5,
    price: "$",
    comments: "lol",
    author: "Ryan"
  });
  
  myDocument.save()
  .then((doc) => {
    console.log(doc);
  })  
  .catch((err) => {
    console.error(err);
  });;

  // Fetch restaurants
  RestaurantModel.find({ author: 'Ryan' })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });;

app.use('/api', ()=>{
    console.log("hello")
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});