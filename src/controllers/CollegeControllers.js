const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const {isValid, isValidUrl,isValidcollegeFN,isValidcollegeName} = require("./validation")



const createCollege = async function (req, res) {
    try {

        let { name, fullName, logoLink } = req.body;

        if (Object.keys(req.body).length < 1) 
        {
            return res.status(400).send({status:false, msg: "Insert Data : BAD REQUEST" })
        }
        if (!isValid(name)) 
        {
            return res.status(400).send({ status:false,msg: "Enter Name" })
        }
        if (!isValidcollegeName(name)) 
        {
            return res.status(400).send({status:false, msg: "name only take alphabets" })
        }
        if (!isValid(fullName)) 
        {
            return res.status(400).send({status:false, msg: "Enter Full Name" })
        }
        if (!isValidcollegeFN(fullName)) 
        {
            return res.status(400).send({status:false, msg: "fullName only take alphabets" })
        }
        if (!isValid(logoLink)) {
            return res.status(400).send({ status:false,msg: "Enter logoLink Name"})
        }
        if(!isValidUrl(logoLink)){
             return res.status(400).send({status:false,msg:"enter valid url"})
        }
       
        let checkName = await collegeModel.findOne({name:name})
        if(checkName) return res.status(400).send({status:false,msg:"name is already exists"})

        let createdCollege = await collegeModel.create(req.body)

        res.status(201).send({
            status: true,
            data: createdCollege 
        })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }

}


module.exports.createCollege = createCollege


const getCollageIntern =  async function (req, res) {
    try {
      let collegeName  = req.query.collegeName
      if(!collegeName) return res.status(400).send({msg:"college name is required"})
      let college = await collegeModel.findOne({name:collegeName,isDeleted:false})
      if(!college) return res.status(404).send({status:false, msg:"college not found"})
      let interns = await internModel.find({collegeId:college._id,isDeleted:false})
     
      college._doc.interns = interns
    
      res.status(200).send({data:college})

    }
    catch(error){
        res.status(500).send({ msg: error.message })
    }
}

module.exports.getCollageIntern = getCollageIntern