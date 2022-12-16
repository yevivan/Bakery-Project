const express = require("express");
const router = express.Router();
const path = require("path");

// commented otherwise deploy shows static html

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../static/index.html"));
// });

module.exports = router;
