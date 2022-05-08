// const dataConn = require('../mdb_data_connection');
const Data = require('../models/Data')

const getCustomers = async (req, res) => {
    const data = await Data.find(); 
    return res.json(data);
};

const getCustomerById = async (req, res) => {
    const data = await Data.findById(req.params.id); 
    return res.json(data);
};

const createCustomer = async (req, res) => {
    const data = new Data(req.body);
    await data.save();
    res.json({
        status: 'Data saved'
    });
}

const updateCustomer = async (req, res) => {
    await Data.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Data updated'
    })
}

const deleteCustomer = async (req, res) => {
    await Data.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Data removed'
    })
}

module.exports = {
    getCustomers: getCustomers,
    getCustomerById: getCustomerById,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer
}