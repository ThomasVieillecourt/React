// 1/ on appelle la librairie express pour créer le back
const express = require("express");
const connectDB = require("./config/db");
const port = 5000;
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

//connection à la DB
connectDB();

//authorisation CORS (authorisdation des requetes)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//Middleware permet de traiter les données du req (request)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// permet de lancer le serveur sur un port
app.listen(port, () => console.log("le serveur a démarré au port " + port));
