
// value validation
const isValid = function(value){
    if(typeof value ==='undefined' || value ===null)  return false
    if(typeof value ==='string' && value.trim().length ===0)return false
    return true
}

//Name Validation
const isValidName =function(name){
    const  nameRegex =/^[a-zA-Z ]{2,30}$/
    return nameRegex.test(name)
}

const isValidcollegeName =function(name){
    const  nameRegex =/^[ a-zA-Z\-]+$/
    return nameRegex.test(name)
}

const isValidcollegeFN =function(name){
    const  nameRegex =/^[a-zA-Z \-\,]+$/
    return nameRegex.test(name)
}

//Url validation
const isValidUrl = function(url){
    const urlRegex =/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/
    return urlRegex.test(url)
}
//Email Validation
const isValidEmail = function(email){
    const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
    return emailRegex.test(email)
}
const isValidMobile = function(mobile){
    const mobileRegex = /^[0]?[6789]\d{9}$/
    return mobileRegex.test(mobile)
}
//ObjectId Validation
const  isValidObjectId =function(id){
    var ObjectId = mongoose.Types.ObjectId;
    return ObjectId.isValid(id)
}
module.exports ={isValid,isValidName,isValidUrl,isValidEmail,isValidMobile,isValidObjectId,isValidcollegeName,isValidcollegeFN}
