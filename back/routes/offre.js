const router = require("express").Router()
const Offre = require("../models/Offre")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

router.post("/offre",async(req,res)=>{
    try{
    const newOffre=new Offre(req.body)
    await newOffre.save()
    res.status(200).json("Offre Added With Success")
    }catch(error){
        console.log(error);
    }

})

router.get("/offre",async(req,res)=>{
    try {
        const Offres=await Offre.find();
        res.status(200).send(Offres)
    } catch (error) {
        console.log(error);
    }
})

router.get("/offre/:id",async(req,res)=>{
    try {
        const specificOffre=await Offre.findById(req.params.id);
        res.status(200).json(specificOffre)
    } catch (error) {
        console.log(error)
    }
})
router.delete("/offre/:id",async(req,res)=>{

    try {
        await Offre.findByIdAndDelete(req.params.id);
        res.status(200).json("Offre Has Been Deleted !!! ")
    } catch (error) {
        console.log(error)
    }
})

router.put("/offre/:id",async(req,res)=>{
    try {
        const updateOffre=await Offre.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateOffre)
    } catch (error) {
        console.log(error)
    }
})



module.exports=router