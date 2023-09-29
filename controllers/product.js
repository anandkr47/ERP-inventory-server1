  const Product = require("../model/product");
  
  exports.createProduct = async (req,res) => {
      console.log(req.body);
    try {
      const product = await new Product(req.body).save();
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  };

  exports.getProduct=async(req,res)=>{
      try{
          const product=await Product.find({});
          res.json(product);
      }
      catch(err){
          console.log(err);
      }
  };
  exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  };
  