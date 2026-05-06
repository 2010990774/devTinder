const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json());

dotenv.config();

app.post("/signup", async (req, res) => {
  // Validation of Data
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the Password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

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

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      res.send("Login Successfully!!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Feed API - GET /feed - get all users from the database
app.get("/feed", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Error in fetching users :" + err.message);
  }
});

// Delete a user from the Database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Error in deleting user :" + err.message);
  }
});

// Update data of the user in the database
app.patch("/user/:userId", async (req, res) => {
  console.log(req.body);
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "age", "about", "gender", "skills"];

    const isUpdatedAllowed = Object.keys(data).every((k) => {
      ALLOWED_UPDATES.includes(k);
    });

    if (!isUpdatedAllowed) {
      throw new Error("Update is not allowed");
    }

    if (data?.skills > 10) {
      throw new Error("Skills cannot be more than 10");
    }

    await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    });
    res.send("User data updated successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
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
