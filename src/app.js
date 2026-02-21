const express = require('express');

const app = express();

// This will match only GET API calls to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Varun", lastName: "Garg" });
})

app.post("/user", (req, res) => {
    // Saving data to DB
    res.send("Data succesfully saved to the database");
})

app.delete("/user", (req, res) => { 
    // Deleting data from DB
    res.send("Data succesfully deleted from the database");
})

// This will match all the HTTP methods API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello Varun, this is test route");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}) 