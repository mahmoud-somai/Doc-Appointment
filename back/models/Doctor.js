const mongoose=require("mongoose")


const DoctorSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        min:3
    },
    speciality:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true,
        min:8
    },
    Location:{
        type:String,
        required:true,
    },
    EducationDesc:{
        type:String,
        required:true,
    },
    Experience:{
        type:String,
        required:true,
    },
    Membership:{
        type:String,
        required:true,
    },
    TimeWorkStart:{
        type:Number,
        required:true,
    },
    TumeWorkEnd:{
        type:Number,
        required:true,
    },
    Picture:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
})

module.exports=mongoose.model("Doctor",DoctorSchema)