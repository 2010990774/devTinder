const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.post("/signup", async (req, res) => {
  // Validation of Data
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the Password
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);

    // Creating Or Storing a new instance of the User Model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashPassword,
    });

    // const user = new User({
    //   firstName: "Arun",
    //   lastName: "Garg",
    //   emailId: "arun@garg.com",
    //   password: "Arun@123",
    // });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      // Create a JWT token for the user
      const token = await user.getJWT();

      // Add the token to cookie and send the response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 7 * 3600 * 1000),
      });
      res.send("Login Successfully!!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  res.send(
    user.firstName + " " + user.lastName + " sent the connection request!!!",
  );
});

connectDB()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000..");
    });
  })
  .catch((err) => {
    console.log("Database cannot be Connected");
  });
