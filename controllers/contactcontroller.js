const asyncHandler=require('express-async-handler')
const Contact=require('../model/contactmodel')
exports.getContact=asyncHandler(async(req,res)=>{
   const contacts=await Contact.find();
    res.status(200).json(contacts)    
})

exports.createContact=asyncHandler(async(req,res)=>{
    const {name,email,phone}=req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All feilds are required");
    }
    const contacts=await Contact.create({name,email,phone})
    res.status(201).json(contacts)    
})

exports.getContactById=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const contacts=await Contact.findById(id);
    if(!contacts){
        res.status(404);
        throw new Error("Contacts not found!");
    }

     res.status(200).json(contacts)    
 })

exports.updateContact=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const contacts=await Contact.findById(id);
    if(!contacts){
        console.log("hello")
        res.status(403);
        throw new Error(`user don't have permission to update other user contacts.`);
    }
    const updatedContact=await Contact.findByIdAndUpdate(id,req.body,{new:true});
   
    res.status(200).json(updatedContact)    
})

exports.deleteContact=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json('deleted successfully.')
})