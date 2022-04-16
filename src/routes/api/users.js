const express = require("express");
const router = express.Router();

const userRegister = require("../../controllers/authController");

// Reegister User routes
router.post("/register", async (req, res) => {
  try {
    const user = await userRegister(req.body);
    return res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .send({ error: "An error has occured trying to register the user" });
  }
});

module.exports = router;