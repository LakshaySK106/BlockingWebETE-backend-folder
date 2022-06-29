require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb+srv://LakshaySK:Lakshaysk@2000@blockingwebete.euqlx.mongodb.net/?retryWrites=true&w=majority";
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {  
  console.log("Database Connected");
});



app.use("/api/routes", routes);  
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Started at ${8000}`);
});
