const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Hello from Admin"));
router.post("/", (req, res) => res.send("Hello from Admin"));

module.exports = router;
