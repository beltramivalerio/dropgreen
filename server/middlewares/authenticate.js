const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const secretKey = process.env["SECRET_KEY"];
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) return res.sendStatus(403);

    req.utente = payload;

    next();
  });
};

module.exports = authenticate;
