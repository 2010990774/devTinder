const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from the request cookies
    const cookies = req.cookies;
    const { token } = cookies;

    if (!token) {
      throw new Error("Token is not Valid!!!");
    }

    const decodedObj = await jwt.verify(token, "Piku@talktome_11_03");
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
};

module.exports = { userAuth };
