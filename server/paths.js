const path = require("path");

const paths = {
  root: path.join(__dirname, ".."),
  server: path.join(__dirname),
  media: path.join(__dirname, "..", "media"),
  static: path.join(__dirname, "..", "static"),
  api: path.join(__dirname, "api"),
  client: path.join(__dirname, "..", "client"),
  secrets: path.join(__dirname, "..", "secrets")
};

module.exports = paths;
