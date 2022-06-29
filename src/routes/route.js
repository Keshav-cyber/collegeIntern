const express = require('express')
const router = express.Router()
const collegeController = require("../controllers/CollegeControllers")
const internController = require("../controllers/InternControllers")

router.post("/functionup/colleges", collegeController.createCollege)
router.post("/functionup/interns",internController.createIntern)
router.get("/functionup/collegeDetails",collegeController.getCollageIntern)

module.exports = router;  // --> exported