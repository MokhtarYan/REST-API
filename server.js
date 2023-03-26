const express = require("express");
const connect = require("./config/connectDB");
const User = require("./models/User");

const app = express();

require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
connect();
//put, create
app.post("/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const newUser = new User({
      fullName,
      email,
      phone,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});
//get,read

app.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const specificUser = await User.findById(req.params.id);
    res.send(specificUser);
  } catch (error) {
    console.log(error);
  }
});
//update
app.put("/update/:id", async (req, res) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send(editedUser);
  } catch (error) {}
});
//delete
app.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on ${PORT}`)
);
