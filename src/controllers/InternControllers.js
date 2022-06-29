const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")


const {isValid,isValidName,isValidEmail,isValidMobile,isValidObjectId} = require("./validation")


const createIntern =  async function (req, res) {
    try {
       let {name,email,mobile,collegeId}=req.body
       console.log(req.body)
       if (Object.keys(req.body).length < 1) 
       {
           return res.status(400).send({status:false, msg: "Insert Data : BAD REQUEST" })
       }
       if (!isValid(name)) 
       {
           return res.status(400).send({ status:false,msg: "Enter Name" })
       }
       if (!isValidName(name)) 
       {
           return res.status(400).send({status:false, msg: "name only take alphabets" })
       }
       if (!isValid(email)) {
          return res.status(400).send({ msg: "Enter Email-Id" })
       }
       if (!isValidEmail(email)) {
          return res.status(400).send({ msg: "enter valid email" })
        }
        let checkEmail = await internModel.findOne({email:email})
       if(checkEmail) return res.status(400).send({msg:"email is already exists"})

       if (!isValid(mobile)) {
        return res.status(400).send({ msg: "Enter mobile number" })
       }
       if(!isValidMobile(mobile)){
        return res.status(400).send({ msg: "Enter valid mobile number" })
       }
       let checkMobile = await internModel.findOne({mobile:mobile})
       if(checkMobile) return res.status(400).send({msg:"mobile number is already exists"})

       if (!isValid(collegeId)) {
        return res.status(400).send({ msg: "Enter collegeId" })
       }
       if(!isValidObjectId){
        return res.status(400).send({ msg: "Enter valid collegeId" })
       }
       let checkCollege = await collegeModel.findOne({_id:collegeId})
       if(!checkCollege) return res.status(400).send({msg:"collage not exists"})

       let createdIntern = await internModel.create(req.body)

       res.status(201).send({status:true,data:createdIntern})

    }
    catch(error){
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

module.exports.createIntern =createIntern