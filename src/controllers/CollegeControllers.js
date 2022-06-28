const CollegeModel = require("../models/CollegeModel")
const createCollege = async function (req, res) {
    try {

        let { name, fullName, logoLink } = req.body;

        if (Object.keys(req.body).length < 1) 
        {
            return res.status(400).send({ msg: "Insert Data : BAD REQUEST" })
        }
        if (!isValid(name)) 
        {
            return res.status(400).send({ msg: "Enter Name" })
        }
        if (!isValidName(name)) 
        {
            return res.status(400).send({ msg: "name only take alphabets" })
        }
        if (!isValid(fullName)) 
        {
            return res.status(400).send({ msg: "Enter Full Name" })
        }
        if (!isValidName(fullName)) 
        {
            return res.status(400).send({ msg: "fullName only take alphabets" })
        }
        if (isValid(logoLink)) 
        {
            return res.status(400).send({ msg: "Enter Full Name" })
        }

        let createdCollege = await collegeModel.create(data)

        res.status(201).send({
            status: true,
            data: { createdCollage }
        })
    } catch (error) {
        res.status(500).send({ msg: err.message })
    }

}


