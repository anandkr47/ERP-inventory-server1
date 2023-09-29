const Costomer = require('../model/costomer');

exports.createCostomer = async (req, res) => {
  try {
    const costomer = await new Costomer(req.body).save();
    res.json(costomer);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding Costomer');
  }
};

exports.getCostomer = async (req, res) => {
  try {
    const costomer = await Costomer.find({});
    res.json(costomer);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting Costomer');
  }
};

exports.updateCostomer = async (req, res) => {
  try {
    const costomer = await Costomer.findByIdAndUpdate(req.params.costomerId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!costomer) {
      return res.status(404).send('Costomer not found');
    }
    res.json(costomer);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating Costomer');
  }
};

exports.deleteCostomer = async (req, res) => {
  try {
    const costomer = await Costomer.findByIdAndDelete(req.params.costomerId);
    if (!costomer) {
      return res.status(404).send('Costomer not found');
    }
    res.json(costomer);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting costomer');
  }
};
