// const dataConn = require('../mdb_data_connection');
const Task = require('../models/Task')

const getCustomers = async (req, res) => {
    const task = await Task.find(); 
    return res.json(task);
};

const getCustomerById = async (req, res) => {
    const task = await Task.findById(req.params.id); 
    return res.json(task);
};

const createCustomer = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: 'Data saved'
    });
}

const updateCustomer = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Data updated'
    })
}

const deleteCustomer = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
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