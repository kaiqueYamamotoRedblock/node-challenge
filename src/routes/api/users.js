const express = require("express");
const routes = express.Router();

const { AuthController } = require("../controllers/authController");
// Reegister User routes
routes.post("/register", async (req, res) => {
  try {
    const user = await AuthController.register(req.body);
    return res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error has occured trying to register the user" });
  }
});
