const Service = require('../model/services');

exports.createService = async (req, res) => {
  try {
    const service = await new Service(req.body).save();
    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating service');
  }
};

exports.getService = async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error getting services');
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.serviceId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).send('Service not found');
    }
    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating service');
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.serviceId);
    if (!service) {
      return res.status(404).send('Service not found');
    }
    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting service');
  }
};
