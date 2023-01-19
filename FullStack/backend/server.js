// 1/ on appelle la librairie express pour créer le back
const express = require("express");
const connectDB = require("./config/db");
const port = 5000;
const app = express();
const dotenv = require("dotenv").config();

//connection à la DB
connectDB();

//Middleware permet de traiter les données du req (request)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// permet de lancer le serveur sur un port
app.listen(port, () => console.log("le serveur a démarré au port " + port));
