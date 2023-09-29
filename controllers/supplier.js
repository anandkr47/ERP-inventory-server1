const Supplier = require('../model/supplier');

exports.createSupplier = async (req, res) => {
  try {
    const supplier = await new Supplier(req.body).save();
    res.json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating supplier');
  }
};

exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.find({});
    res.json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting suppliers');
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(req.params.supplierId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).send('Supplier not found');
    }
    res.json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating supplier');
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.supplierId);
    if (!supplier) {
      return res.status(404).send('Supplier not found');
    }
    res.json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting supplier');
  }
};
