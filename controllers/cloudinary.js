const cloudinary=require('cloudinary');
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})
exports.upload=async(req,res)=>{
    //  let result =await cloudinary.Uploader.upload(req.body.image,{
        console.log("lakshman");
      console.log(req.body,"hello")
      res.json("lkjhgfds")
    //     try{
    //     let result =await cloudinary.v2.uploader.upload(req.body,{
    //     public_id:`${Date.now()}`,
    //     resource_type:"auto"
    //  });
    //  res.json({
    //     public_id:result.public_id,
    //     url:result.secure_url
    //  })
    // }catch(err){
    //     console.log(err)
    // }
}

exports.remove=async(req,res)=>{

    let image_id=req.body.public_id;
   await cloudinary.v2.uploader.destroy(image_id,(err,result)=>{
        if(err) return res.json({sucess:false,err})
        res.send("ok");
    });}