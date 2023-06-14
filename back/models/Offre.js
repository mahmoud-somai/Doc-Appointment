const mongoose=require("mongoose")


const OffreSchema=new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
        
    },
    phone:{
        type:String,
      
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    
    }
})

module.exports=mongoose.model("Offre",OffreSchema)