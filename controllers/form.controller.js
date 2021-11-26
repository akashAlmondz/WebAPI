const formData = require("../models/web-api")

exports.getData=async (req,res)=>{
    const data= await formData.find();
     res.status(200).json({
        totalData:data.length,
         data:data
     })
}

exports.postData= async (req,res)=>{
try{
    const data=await formData.create(req.body);
    res.status(200).json({
        totalData:data.length, 
        data:data
    })
   }catch(err){
       res.status(500).json({
           message:err.message
       })
   }
}