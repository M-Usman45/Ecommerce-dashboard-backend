const mongoose= require('mongoose');
const validateMongodbID=(id)=>{
    const isValid=mongoose.Types.ObjectId.isValid(id);
    if(!isValid){
        throw new Error("This is not valid or not");
    }
}

module.exports= validateMongodbID;