const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const paths = require("./paths");
const initSU = require("./utils/initSU");

// DOTENV
require("dotenv").config();

// App definition
const app = express(express.json());
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Media
app.use("/media", express.static(paths.media));

// Static files
app.use("/static", express.static(paths.static));

// Client
app.use(express.static(paths.client));

// Serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(paths.client, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

initSU();
