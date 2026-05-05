const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/user");

app.use(express.json());

dotenv.config();

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User Model
  const user = new User(req.body);

  // const user = new User({
  //   firstName: "Arun",
  //   lastName: "Garg",
  //   emailId: "arun@garg.com",
  //   password: "Arun@123",
  // });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error in adding user :" + err.message);
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
app.patch("/user", async (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const data = req.body;

  try {
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
