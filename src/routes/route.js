const express = require('express')
const router = express.Router()
const CollegeController = require("../controllers/CollegeController")
const InternController = require("../controllers/InternController")

router.post("/functionup/colleges", collegeController.createBlog)

module.exports = router;  // --> exported